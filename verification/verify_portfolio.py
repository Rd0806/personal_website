from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_portfolio(page: Page):
    # 1. Arrange: Go to the local development server.
    page.goto("http://localhost:3000")

    # 2. Act & Assert: Check for key elements

    # Check if the hero section heading is visible
    expect(page.get_by_role("heading", name="RUDRA DESAI")).to_be_visible()

    # Wait for the typing animation to likely complete (2s)
    time.sleep(2.5)

    # Check for the terminal text
    expect(page.get_by_text("Engineering the future with AI & Algorithms.")).to_be_visible()

    # Check for the Bento Grid
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(1) # Allow scroll

    expect(page.get_by_text("EXPERIENCE & SKILLS")).to_be_visible()
    expect(page.get_by_text("Undergraduate Research Intern").first).to_be_visible()

    # 3. Screenshot: Capture the full page
    page.screenshot(path="verification/portfolio_verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_portfolio(page)
        finally:
            browser.close()
