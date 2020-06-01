const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const HomePage = require("../pages/homePage");
var chai = require("chai"),
  expect = chai.expect,
  chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const EC = browser.ExpectedConditions;
let subTotal;

Given("Amazon.co.uk is open", function () {
  browser.waitForAngularEnabled(false);
  return browser.get(browser.baseUrl);
});

When("I click Sign-in", function () {
  return HomePage.clickSignInButton();
});

Then("I am logged in", function () {
  return expect(HomePage.checkAccountLoggedIn()).to.equal("sign Out");
});

Given("when I search for {string}", function (string) {
  return HomePage.searchItem(string);
});

When("the search results are displayed", function () {
  return expect(
    HomePage.checkSearchItemsReturned().isPresent()
  ).to.eventually.equal(true);
});

Then("the search results has the {string} in it", function (value) {
  return expect(
    HomePage.checkItemDescriptinText()
      .getText()
      .then((val) => parseInt(val.substring(0, 2)))
  ).to.eventually.greaterThan(0);
});

Given("I add {string} to my basket", function (value) {
  browser.wait(EC.elementToBeClickable(HomePage.getSearchListing()), 5000);
  return HomePage.selectItem(value);
});

When("I check my basket total", async function () {
  await browser.wait(EC.presenceOf(HomePage.getSubtotalAmount()), 5000);
  return expect(
    HomePage.getSubtotalAmount()
      .getText()
      .then((value) => (subTotal = parseInt(value.substring(1))))
  ).to.eventually.greaterThan(0);
});

Then(
  "it should match the price of the item added into basket",
  async function () {
    await HomePage.viewBasket();
    await browser.wait(EC.presenceOf(HomePage.totalBasket()), 5000);
    return expect(
      HomePage.totalBasket()
        .getText()
        .then((value) => value.substring(1))
    ).to.eventually.contain(subTotal);
  }
);
