import { test, expect } from '@playwright/test';
import { iPhoneDetailsPage } from '../pages/iphone';

test('Can buy iPhone 15 pro', async ({ page }) => {
  const iPhoneDetail = new iPhoneDetailsPage(page)

  await iPhoneDetail.open()

  await iPhoneDetail.selectSize()
  await iPhoneDetail.selectColorOption()
  await iPhoneDetail.selectStorageOption()
  await iPhoneDetail.selectNoTradeInOption()
  await iPhoneDetail.selectFullPriceOption()
  await iPhoneDetail.selectAnyCarrierOption()
  await iPhoneDetail.selectAppleCareOption()
  await iPhoneDetail.addToCart()

  // check "Review Bag" button is present
  // await page.waitForLoadState()
  // await expect(page.locator('[data-autom="proceed"]')).toHaveText('Review Bag', {timeout: 10000})
});
