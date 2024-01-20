class KategoriPage {
    element = {
        namaInput: () => cy.get('#nama'),
        deskripsiInput: () => cy.get('#deskripsi'),
        submitBtn: ()=> cy.get('.chakra-button')
    }

    clickMenuKategori(){
        return cy.get('.css-1mqa38q').eq(4).click(); 
    }

    clickAddKategori(){
        return cy.get('.css-1piskbq', { timeout: 10000 }).should('be.visible').click();
    }

    fillForm(nama, deskripsi){
        this.element.namaInput().type(nama)
        this.element.deskripsiInput().type(deskripsi)

        this.element.submitBtn().click()
    }
}

export const kategoriPage = new KategoriPage();