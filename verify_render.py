import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Load index.html directly
        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")

        # Take a screenshot of the initial state
        await page.screenshot(path="/home/jules/verification/initial_load.png", full_page=True)
        print("Captured initial state screenshot.")

        # Select Subject filter to trigger load
        await page.select_option("#filter-subject", "Civil Technology")
        await page.wait_for_timeout(500) # Let rendering finish

        # Take screenshot of loaded state
        await page.screenshot(path="/home/jules/verification/subject_filtered.png", full_page=True)
        print("Captured subject filtered screenshot.")

        await browser.close()

asyncio.run(run())
