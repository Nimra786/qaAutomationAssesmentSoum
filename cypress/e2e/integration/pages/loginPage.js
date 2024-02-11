class LoginPage {
    // Define locators as class properties
    btnLogin = 'input[type="submit"]';
    
    errMessage = '[class="error-message-container error"]';

    inpPassword = 'input[placeholder="Password"]';
    inpUsername = 'input[placeholder="Username"]';

    lblTitle = '[class="login_logo"]';
  }
  export default new LoginPage();

  