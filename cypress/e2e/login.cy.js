import { loginPage } from "../pages/LoginPage";

describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com');
  });

  it('success login with correct authentication', () => {
    loginPage.login('nhisa4599@gmail.com', 'password123');
    cy.wait(5000);

    cy.url().should('include', '/dashboard');
  });

  // it('failled login with wrong password', ()=>{
  //   loginPage.login('nhisa4599@gmail.com', 'password121');
    
  //   cy.wait(2000);
  //   loginPage.alert().should('have.text','Kredensial yang Anda berikan salah')
  // })

});
