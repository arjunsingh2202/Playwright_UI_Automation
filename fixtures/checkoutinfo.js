export async function checkout(page) {
    await page.fill("#first-name","arjun")
    await page.fill("#last-name","Singh")
    await page.fill("#postal-code","201009")
    
}