import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { onRequestGet, onRequestPost } from '../functions/event.js';

const samplePayload = {
  eventId: 'event-test',
  type: 'cta_click',
  detail: {
    id: 'hero_contact',
    label: 'Contact me',
    href: '#contact',
  },
  visitorId: 'visitor-test',
  sessionId: 'session-test',
  path: '/',
  search: '?utm_source=test',
  referrer: 'https://example.com',
  viewport: {
    width: 390,
    height: 844,
  },
  userAgent: 'Playwright Test Browser',
  locale: 'en-US',
  timeZone: 'Asia/Ho_Chi_Minh',
  timestamp: '2026-05-17T09:00:00.000Z',
};

function jsonRequest(body, { headers = {}, cf } = {}) {
  const request = new Request('https://tantai.dev/event', {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });

  if (cf) {
    Object.defineProperty(request, 'cf', {
      value: cf,
    });
  }

  return request;
}

describe('Cloudflare Pages notification function', () => {
  it('responds to health checks', async () => {
    const response = await onRequestGet();

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
  });

  it('rejects invalid JSON payloads', async () => {
    const request = new Request('https://tantai.dev/event', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: 'not json',
    });

    const response = await onRequestPost({ request, env: {} });

    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { error: 'Invalid JSON payload' });
  });

  it('accepts valid events without notification secrets', async () => {
    const response = await onRequestPost({
      request: jsonRequest(samplePayload),
      env: {},
    });

    assert.equal(response.status, 204);
  });

  it('sends configured Telegram notifications with portfolio header and visitor metadata', async () => {
    const originalFetch = globalThis.fetch;
    const calls = [];

    globalThis.fetch = async (url, options) => {
      calls.push({
        url: String(url),
        body: JSON.parse(options.body),
      });

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    };

    try {
      const response = await onRequestPost({
        request: jsonRequest(samplePayload, {
          headers: {
            'cf-connecting-ip': '203.0.113.42',
          },
          cf: {
            city: 'Ho Chi Minh City',
            region: 'Ho Chi Minh',
            country: 'VN',
            latitude: '10.8231',
            longitude: '106.6297',
            timezone: 'Asia/Ho_Chi_Minh',
            colo: 'SGN',
            asn: 64512,
            asOrganization: 'Example ISP',
          },
        }),
        env: {
          TELEGRAM_BOT_TOKEN: 'telegram-token',
          TELEGRAM_CHAT_ID: 'telegram-chat',
        },
      });

      assert.equal(response.status, 204);
      assert.equal(calls.length, 1);
      assert.equal(calls[0].url, 'https://api.telegram.org/bottelegram-token/sendMessage');
      assert.equal(calls[0].body.chat_id, 'telegram-chat');
      assert.match(calls[0].body.text, /Tan Tai portfolio event: cta_click/);
      assert.match(calls[0].body.text, /Source: hero_contact/);
      assert.match(calls[0].body.text, /Visitor: visitor-test/);
      assert.match(calls[0].body.text, /Session: session-test/);
      assert.match(calls[0].body.text, /IP: 203.0.113.42/);
      assert.match(calls[0].body.text, /Location: Ho Chi Minh City, Ho Chi Minh, VN/);
      assert.match(calls[0].body.text, /Coordinates: 10.8231, 106.6297/);
      assert.match(calls[0].body.text, /Network: Example ISP \/ AS64512/);
      assert.match(calls[0].body.text, /Viewport: 390x844/);
      assert.match(calls[0].body.text, /Browser: Playwright Test Browser/);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});
