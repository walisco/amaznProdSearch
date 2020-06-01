const { Given, When, Then, setDefaultTimeout } = require('cucumber');
// const chai = require('chai').use(require('chai-as-promised'));
// const expect = chai.expect;
const LoginPage = require('../pages/loginPage')
const LoginData = require('../dataConfig/config.json');

When('enter valid username', function () {
  return LoginPage.enterUserName(LoginData.login.username);
}); 

When('I Continue', function () {
  return LoginPage.clickContinueBtn();
});  

When('enter valid password', function () {
  return LoginPage.enterPassword(LoginData.login.password);
});

When('I signed in', function () {
  return LoginPage.clickSignInBtn();
});
