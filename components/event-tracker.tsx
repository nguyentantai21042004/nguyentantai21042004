"use client";

import { useEffect } from "react";

const EVENT_ENDPOINT = "/event";
const VISITOR_KEY = "portfolio-visitor-id";
const SESSION_KEY = "portfolio-session-id";
const EVENT_COOLDOWN_PREFIX = "portfolio-event-cooldown";
const PAGE_VIEW_COOLDOWN_MS = 30 * 60 * 1000;
const CTA_CLICK_COOLDOWN_MS = 2500;

function createId(prefix: string) {
  if (window.crypto?.randomUUID) return `${prefix}_${window.crypto.randomUUID()}`;
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function storageGet(storage: Storage, key: string) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(storage: Storage, key: string, value: string) {
  try {
    storage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function getStoredId(storage: Storage, key: string, prefix: string) {
  const existingId = storageGet(storage, key);
  if (existingId) return existingId;

  const newId = createId(prefix);
  storageSet(storage, key, newId);
  return newId;
}

function buildEventPayload(type: string, detail = {}) {
  const visitorId = getStoredId(window.localStorage, VISITOR_KEY, "visitor");
  const sessionId = getStoredId(window.sessionStorage, SESSION_KEY, "session");

  return {
    eventId: createId("event"),
    type,
    detail,
    visitorId,
    sessionId,
    path: window.location.pathname,
    search: window.location.search,
    referrer: document.referrer || null,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    userAgent: window.navigator.userAgent,
    locale: window.navigator.language,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString(),
  };
}

function shouldSendWithCooldown(type: string, key: string, cooldownMs: number) {
  const cooldownKey = `${EVENT_COOLDOWN_PREFIX}:${type}:${key}`;
  const now = Date.now();
  const lastSentAt = Number(storageGet(window.localStorage, cooldownKey));

  if (Number.isFinite(lastSentAt) && now - lastSentAt < cooldownMs) {
    return false;
  }

  storageSet(window.localStorage, cooldownKey, String(now));
  return true;
}

function sendEvent(type: string, detail: Record<string, unknown>) {
  const payload = JSON.stringify(buildEventPayload(type, detail));

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    if (navigator.sendBeacon(EVENT_ENDPOINT, blob)) {
      return;
    }
  }

  fetch(EVENT_ENDPOINT, {
    method: "POST",
    body: payload,
    headers: { "content-type": "application/json" },
    keepalive: true,
  }).catch(() => {});
}

export function EventTracker() {
  useEffect(() => {
    if (shouldSendWithCooldown("page_view", window.location.pathname, PAGE_VIEW_COOLDOWN_MS)) {
      sendEvent("page_view", {
        title: document.title,
      });
    }

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("[data-track]") : null;
      if (!(target instanceof HTMLElement)) return;

      const trackId = target.getAttribute("data-track");
      if (!shouldSendWithCooldown("cta_click", trackId || target.getAttribute("href") || "", CTA_CLICK_COOLDOWN_MS)) {
        return;
      }

      sendEvent("cta_click", {
        id: trackId,
        label: target.textContent?.trim().replace(/\s+/g, " ") || "",
        href: target.getAttribute("href") || null,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
