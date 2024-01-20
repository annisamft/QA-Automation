import { loginPage } from "../pages/LoginPage";
import { kategoriPage } from "../pages/kategoriPage";

describe('Kategori', ()=>{
    beforeEach(() => {
        cy.visit('https://kasirdemo.belajarqa.com');
        loginPage.login('nhisa4599@gmail.com', 'password123');
      });

    it('go to kategori page and add new kategori', ()=>{
      kategoriPage.clickMenuKategori()
      kategoriPage.clickAddKategori()
      kategoriPage.fillForm('Peralatan Rumah', 'peralatan rumah')
    })
})