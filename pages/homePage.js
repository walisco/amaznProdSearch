var HomePage = function () {
  let signIn = element(by.xpath('//*[@data-nav-ref="nav_signin"]'));
  let accountList = element(by.id("nav-link-accountList"));
  let signOutLink = element(by.xpath('//*[@id="nav-item-signout"]/span'));
  let searchBar = $('input#twotabsearchtextbox');
  let searchBtn = $('.nav-search-submit.nav-sprite');  
  let returnedSearchItems = $$('.a-size-base-plus');
  let searchResult = element(by.xpath(("//*[contains(text(),'results for')]")));
  let searchListing = $$('.a-link-normal.a-text-normal').first();
  let addToBasket = $('#add-to-cart-button');
  let subTotal = $$('.a-color-price.hlb-price.a-inline-block.a-text-bold').first();
  let subTotalValue =  element(by.id("attach-accessory-cart-subtotal"));
  let basket = element(by.xpath("//*[(text()='Basket')]"));
  let basketSubTotal = element(by.id('sc-subtotal-amount-buybox'));

  this.clickSignInButton = function () {
    return browser
      .actions()
      .mouseMove(accountList)
      .mouseMove(signIn)
      .click()
      .perform();
  };

  this.checkAccountLoggedIn = () => {
    return browser
      .actions()
      .mouseMove(accountList)
      .mouseMove(signOutLink)
      .getText()
      .perform();
  };

  this.searchItem = search => {
    searchBar.sendKeys(search);
    return searchBtn.click();
  }

  this.checkSearchItemsReturned = function () {
    return returnedSearchItems;
  }

  this.checkItemDescriptinText = (value) => {
    return searchResult;
  }

  this.getSearchListing = () => {
      return searchListing;
  }

  this.addItemToBasket =  function (value) {
    return addToBasket.click();
  }

  this.getSubtotalAmount = function () {
    return subTotal;
  }

  this.selectItem = function (value) {
      return element.all(by.partialLinkText(value)).first().click();
  }

  this.viewBasket = function () {
      return basket.click();
  }

  this.totalBasket = function () {
      return basketSubTotal;
  }

};
module.exports = new HomePage();
