# Deployment Notes

This repository is both the GitHub profile repository and the source for the portfolio site. Keep the root `README.md` profile-focused; put deployment details here.

## Cloudflare Pages

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `master`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: leave blank when deploying from the repository root
- Node version: set `NODE_VERSION=22`

The static export is configured in `next.config.mjs` with `output: "export"` and unoptimized images.

## Runtime Functions

Cloudflare Pages serves the event endpoint from `functions/event.js`.

Required production variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Optional:

- `DISCORD_WEBHOOK_URL`

The client sends portfolio analytics events to `/event`. The function enriches each event with Cloudflare request metadata and forwards it to the configured notification targets.

## Local Checks

Run these before shipping changes:

```bash
npm run typecheck
npm run test
npm run build
```

For browser smoke testing, start a static server against `out` and run:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:4174 npm run test:e2e
```
