var LoginPage = function () {
    
 let userName = element(by.name('email'));
 let password = element(by.name('password'));;
 let continueBtn = element(by.id('continue'));
 let signInBtn = element(by.id('signInSubmit'));

 this.enterUserName = function (emailValue) {
     return userName.sendKeys(emailValue);
 }

 this.clickContinueBtn = () => {
     return continueBtn.click();
 }

 this.enterPassword = (paswordValue) => {
    return password.sendKeys(paswordValue)
 } 

 this.clickSignInBtn = () => {
     return signInBtn.click();
 }

}
module.exports = new LoginPage();
