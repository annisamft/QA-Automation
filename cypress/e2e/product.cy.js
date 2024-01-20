import { loginPage } from "../pages/LoginPage";
import { productPage } from "../pages/productPage";
import { generateRandomFoodIngredient } from "../pages/commonAction";

describe('Product', ()=>{
    beforeEach(() => {
        cy.visit('https://kasirdemo.belajarqa.com');
        loginPage.login('nhisa4599@gmail.com', 'password123');
      });
    
      it('go to product page and add new product', () => {
        const randomFoodIngredient = generateRandomFoodIngredient();
        productPage.clickMenuProduct();
        productPage.clickAddProduct();
        productPage.fillForm(randomFoodIngredient, 'mentega blueband', 35000, 45000, 10)
        // cy.wait(1000)
        productPage.newProductRow();
        // productPage.successAlert().should('have.text','success')
        // productPage.successMessage().should('have.text','item ditambahkan')
        
      });
})