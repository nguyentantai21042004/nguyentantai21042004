import { expect, test } from "@playwright/test";

const BASE_URL = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:4173";

async function wireEvents(page) {
  const events = [];
  const errors = [];

  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.route("**/event", async (route) => {
    const postData = route.request().postData();
    if (postData) events.push(JSON.parse(postData));
    await route.fulfill({ status: 204, body: "" });
  });

  return { events, errors };
}

test("desktop portfolio renders and tracks actions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1100 });
  const { events, errors } = await wireEvents(page);
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { name: /Systems that read clearly/i })).toBeVisible();
  await expect(page.getByText("Software Engineer · G1")).toBeVisible();
  await expect(page.getByRole("heading", { name: "A concise engineering ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Projects shown as working systems" })).toBeVisible();
  await expect.poll(() => events.some((event) => event.type === "page_view")).toBe(true);

  await page.getByRole("link", { name: /Contact me/i }).first().click();
  await expect
    .poll(() => events.some((event) => event.type === "cta_click" && event.detail.id === "hero_contact"))
    .toBe(true);

  const hasHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalScroll).toBe(false);
  expect(errors).toEqual([]);
});

test("mobile portfolio keeps ledger layout readable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const { events, errors } = await wireEvents(page);
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { name: /Systems that read clearly/i })).toBeVisible();
  await expect(page.getByText("Ahamove G1").first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Engineering ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Working systems" })).toBeVisible();
  await expect
    .poll(() => events.some((event) => event.type === "page_view" && event.viewport.width === 390))
    .toBe(true);

  const hasHorizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalScroll).toBe(false);
  expect(errors).toEqual([]);
});
