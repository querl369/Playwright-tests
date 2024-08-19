import { expect, type Locator, type Page } from '@playwright/test';

export class iPhoneDetailsPage {
  readonly page: Page;
  readonly productHeader: Locator;
  readonly productPrice: Locator;
  readonly buttonSize: Locator;
  readonly buttonColorOption: Locator;
  readonly buttonStorageOption: Locator;
  readonly buttonNoTradeInOption: Locator;
  readonly buttonFullPriceOption: Locator;
  readonly buttonAnyCarrier: Locator;
  readonly buttonAppleCareOption: Locator;
  readonly buttonAddToCart: Locator;

//   readonly getStartedLink: Locator;
//   readonly gettingStartedHeader: Locator;
//   readonly pomLink: Locator;
//   readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productHeader = page.locator('[data-autom="bfe-header"]')
    this.productPrice = page.locator('[data-autom="headerPrice"] [data-autom="full-price"]')
    this.buttonSize = page.locator('[data-autom="dimensionScreensize6_1inch"]')
    this.buttonColorOption = page.locator('[data-autom="dimensionColorbluetitanium"] + label')
    this.buttonStorageOption = page.locator('[data-autom="dimensionCapacity256gb"] + label')
    this.buttonNoTradeInOption = page.locator('[data-autom="choose-noTradeIn"] + label')
    this.buttonFullPriceOption = page.locator('[data-autom="purchaseGroupOptionfullprice"] + label')
    this.buttonAnyCarrier = page.locator('[data-autom="carrierModelUNLOCKED/US"] + label')
    this.buttonAppleCareOption = page.locator('[data-autom="applecareplus_58_noapplecare"] + label')
    this.buttonAddToCart = page.locator('button[data-autom="add-to-cart"]')

    // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    // this.pomLink = page.locator('li', {
    //   hasText: 'Guides',
    // }).locator('a', {
    //   hasText: 'Page Object Model',
    // });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async open() {
    await this.page.goto('https://www.apple.com/shop/buy-iphone/iphone-15-pro');
    await this.waitForPageLoad()
  }

  async waitForPageLoad() {
    await expect(this.productHeader).toBeVisible()
    await expect(this.productPrice).toBeVisible()
  }

  async selectSize() {
    await this.buttonSize.scrollIntoViewIfNeeded()
    await this.buttonSize.click()
  }

  async selectColorOption() {
    await this.buttonColorOption.scrollIntoViewIfNeeded()
    await this.buttonColorOption.click()
  }

  async selectStorageOption() {
    await this.buttonStorageOption.scrollIntoViewIfNeeded()
    await this.buttonStorageOption.click()
  }

  async selectNoTradeInOption() {
    await this.buttonNoTradeInOption.scrollIntoViewIfNeeded()
    await this.buttonNoTradeInOption.click()
  }

  async selectFullPriceOption() {
    await this.buttonFullPriceOption.scrollIntoViewIfNeeded()
    await this.buttonFullPriceOption.click()
  }

  async selectAnyCarrierOption() {
    await this.buttonAnyCarrier.scrollIntoViewIfNeeded()
    await this.buttonAnyCarrier.click()
  }

  async selectAppleCareOption() {
    await this.buttonAppleCareOption.scrollIntoViewIfNeeded()
    await this.buttonAppleCareOption.click()
  }

  async addToCart() {
    await expect(this.buttonAddToCart).toBeEnabled()
    await this.buttonAddToCart.scrollIntoViewIfNeeded()
    await this.buttonAddToCart.click()
  }
}