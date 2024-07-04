const { test, expect } = require("@playwright/test");

test.describe("Note app", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const locator = await page.getByText("Notes");
    await expect(locator).toBeVisible();
    await expect(
      page.getByText(
        "Note app, Department of Computer Science, University of Helsinki 2024"
      )
    ).toBeVisible();
  });

  test("login form can be opened", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await page.getByRole("button", { name: "log in" }).click();
    await page.getByRole("textbox").first().fill("root");
    await page.getByRole("textbox").last().fill("sekret");
    await page.getByRole("button", { name: "login" }).click();

    // Me olvide de ponerle user.name, por lo que printea 'vacio'
    await expect(page.getByText("logged-in")).toBeVisible();
  });
});
