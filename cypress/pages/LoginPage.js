class LoginPage {
    element = {
      alert:() => cy.get('.chakra-alert')
    }
  
    typeEmail(email) {
      // this.elements.emailInput().type(email);
      return cy.get("#email").type(email)
    }
  
    typePassword(password) {
      // this.elements.passwordInput().type(password);
      return cy.get("#password").type(password)
    }
  
    clickLogin() {
      return cy.get('.chakra-button', { timeout: 10000 }).should('be.visible').click();
    }

    login(email, password) {
      this.typeEmail(email);
      this.typePassword(password);
      this.clickLogin({ timeout: 10000 });
      cy.url().should('include', '/dashboard');
    }

    alert(){
      return this.element.alert()
    }
  
  }
  
  export const loginPage = new LoginPage();
  