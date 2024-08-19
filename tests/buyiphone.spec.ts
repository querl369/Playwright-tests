import { test, expect } from '@playwright/test';

test('Can buy iPhone 15 pro', async ({ page }) => {
  await page.goto('https://www.apple.com/shop/buy-iphone/iphone-15-pro');

  // select screen size
  const screenSize = await page.locator('[data-autom="dimensionScreensize6_1inch"]')
  screenSize.click()

  // assert and select color option
  await expect(page.locator('[data-autom="dimensionColorbluetitanium"]')).toBeEnabled()
  await page.locator('[data-autom="dimensionColorbluetitanium"] + label').click()

  // assert and select storage capacity
  await expect(page.locator('[data-autom="dimensionCapacity256gb"]')).toBeEnabled()
  await page.locator('[data-autom="dimensionCapacity256gb"] + label').click()

  // assert choose "No trade in option"
  await expect(page.locator('[data-autom="choose-noTradeIn"] + label')).toBeEnabled()
  await page.locator('[data-autom="choose-noTradeIn"] + label').click()

  // elect buy option with full price
  await expect(page.locator('[data-autom="purchaseGroupOptionfullprice"] + label')).toBeEnabled()
  await page.locator('[data-autom="purchaseGroupOptionfullprice"] + label').click()

  // select connect to any carrier later
  await expect(page.locator('[data-autom="carrierModelUNLOCKED/US"] + label')).toBeEnabled()
  await page.locator('[data-autom="carrierModelUNLOCKED/US"] + label').click()

  // select no Apple care option
  await expect(page.locator('[data-autom="applecareplus_58_noapplecare"] + label')).toBeEnabled()
  await page.locator('[data-autom="applecareplus_58_noapplecare"] + label').click()

  // add to cart
  await expect(page.locator('button[data-autom="add-to-cart"]')).toBeEnabled()
  await page.locator('button[data-autom="add-to-cart"]').scrollIntoViewIfNeeded()
  await page.locator('button[data-autom="add-to-cart"]').click()

  // check "Review Bag" button is present
  await page.waitForLoadState()
  await expect(page.locator('[data-autom="proceed"]')).toHaveText('Review Bag', {timeout: 10000})
});
