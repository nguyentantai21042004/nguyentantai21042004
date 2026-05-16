const TELEGRAM_API = 'https://api.telegram.org/bot';

function cleanText(value, fallback = '-') {
  if (value === null || value === undefined || value === '') return fallback;
  return String(value).slice(0, 700);
}

function cleanHeader(value) {
  if (!value) return null;
  return String(value).split(',')[0].trim() || null;
}

function joinPresent(values, separator = ', ') {
  return values.filter(Boolean).map((value) => cleanText(value)).join(separator);
}

function getVisitorMeta(request) {
  const cf = request.cf || {};
  const ip =
    cleanHeader(request.headers.get('cf-connecting-ip')) ||
    cleanHeader(request.headers.get('x-forwarded-for')) ||
    cleanHeader(request.headers.get('x-real-ip'));
  const location = joinPresent([cf.city, cf.region, cf.country]);
  const coordinates = joinPresent([cf.latitude, cf.longitude], ', ');
  const network = joinPresent([cf.asOrganization, cf.asn ? `AS${cf.asn}` : null], ' / ');

  return {
    ip,
    location,
    coordinates,
    timezone: cf.timezone,
    colo: cf.colo,
    network,
  };
}

function formatMessage(payload, request) {
  const type = cleanText(payload.type, 'event');
  const path = cleanText(payload.path, '/');
  const source = cleanText(payload.detail?.id || payload.detail?.title, 'portfolio');
  const referrer = cleanText(payload.referrer, 'direct');
  const viewport = payload.viewport ? `${payload.viewport.width}x${payload.viewport.height}` : '-';
  const visitor = getVisitorMeta(request);

  return [
    `Tan Tai portfolio event: ${type}`,
    `Source: ${source}`,
    `Path: ${path}${cleanText(payload.search, '')}`,
    `Referrer: ${referrer}`,
    `Viewport: ${viewport}`,
    `Visitor: ${cleanText(payload.visitorId, 'unknown')}`,
    `Session: ${cleanText(payload.sessionId, 'unknown')}`,
    `IP: ${cleanText(visitor.ip)}`,
    `Location: ${cleanText(visitor.location, 'unknown')}`,
    `Coordinates: ${cleanText(visitor.coordinates, 'unknown')}`,
    `Timezone: ${cleanText(visitor.timezone, 'unknown')}`,
    `Network: ${cleanText(visitor.network, 'unknown')}`,
    `Cloudflare colo: ${cleanText(visitor.colo, 'unknown')}`,
    `Browser: ${cleanText(payload.userAgent, 'unknown')}`,
    `Time: ${cleanText(payload.timestamp, new Date().toISOString())}`,
  ].join('\n');
}

async function notifyTelegram(env, message) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return null;

  const response = await fetch(`${TELEGRAM_API}${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: message,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram notification failed: ${response.status}`);
  }

  return response;
}

async function notifyDiscord(env, message) {
  if (!env.DISCORD_WEBHOOK_URL) return null;

  const response = await fetch(env.DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ content: message }),
  });

  if (!response.ok) {
    throw new Error(`Discord notification failed: ${response.status}`);
  }

  return response;
}

export async function onRequestPost({ request, env }) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!payload || typeof payload.type !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing event type' }), {
      status: 422,
      headers: { 'content-type': 'application/json' },
    });
  }

  const message = formatMessage(payload, request);

  try {
    await Promise.all([notifyTelegram(env, message), notifyDiscord(env, message)]);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Notification failed' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  return new Response(null, { status: 204 });
}

export async function onRequestGet() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
