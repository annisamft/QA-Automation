import { loginPage } from "../pages/LoginPage";
import { generateRandomName } from "../pages/commonAction";
import { pelangganPage } from "../pages/pelangganPage";

describe('Pelanggan', ()=>{
    beforeEach(() => {
        cy.visit('https://kasirdemo.belajarqa.com');
        loginPage.login('nhisa4599@gmail.com', 'password123');
      });

    it('go to pelanggan page and add new pelanggan', ()=>{
      const randomName = generateRandomName();
      pelangganPage.clickMenuPelanggan()
      pelangganPage.clickAddPelanggan()
      pelangganPage.fillForm(randomName, '081986754333' , 'jakarta', 'abcd')
    })
})