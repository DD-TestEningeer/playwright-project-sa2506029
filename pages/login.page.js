class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';

    this.logo = 'img[alt="company-branding"]';
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

async enterUsername(username) {
    await this.page.fill(this.usernameInput, username);
}


}

module.exports = { LoginPage };
