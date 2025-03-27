import { test, expect } from "@playwright/test";

test("Home page should display all cocktail category cards", async ({
  page,
}) => {
  const categories = ["Gin", "Vodka", "Rum", "Scotch", "Alkoholfrei", "Zufall"];
  await page.goto("http://localhost:5173/");
  for (const category of categories) {
    await expect(page.getByText(category)).toBeVisible();
  }
});
