import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Load index.html directly
        file_path = os.path.abspath("index.html")
        await page.goto(f"file://{file_path}")

        # Ensure verification directory exists
        os.makedirs("/home/jules/verification", exist_ok=True)

        # 1. Take a screenshot of the initial state
        await page.screenshot(path="/home/jules/verification/initial_load.png", full_page=True)
        print("Captured initial state screenshot.")

        # 2. Select Year filter to enable Subject
        await page.select_option("#filter-year", "2024")
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/year_selected.png", full_page=True)
        print("Captured year selected state screenshot.")

        # 3. Select Subject to trigger JSON fetch and render
        await page.select_option("#filter-subject", "technical_mathematics")
        await page.wait_for_timeout(1000) # Let fetch and rendering finish
        await page.screenshot(path="/home/jules/verification/subject_loaded.png", full_page=True)
        print("Captured subject loaded state screenshot.")

        await browser.close()

asyncio.run(run())
