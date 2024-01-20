class PelangganPage {
    element = {
        namaInput: () => cy.get('#nama'),
        nomorHpInput: () => cy.get('.css-4302v8').eq(2),
        alamatInput: () => cy.get('#alamat'),
        keteranganInput: () => cy.get('#keterangan'),
        submitBtn: () => cy.get('.chakra-button')
    }

    clickMenuPelanggan(){
        return cy.get('.css-1mqa38q').eq(7).click(); 
    }

    clickAddPelanggan(){
        return cy.get('.css-1piskbq', { timeout: 10000 }).should('be.visible').click();
    }

    fillForm(nama, noHp, alamat, keterangan){
        this.element.namaInput().type(nama)
        this.element.nomorHpInput().type(noHp)
        this.element.alamatInput().type(alamat)
        this.element.keteranganInput().type(keterangan)

        this.element.submitBtn().click()
    }
}

export const pelangganPage = new PelangganPage();