class ProductPage {
    element = {
        namaInput: () => cy.get('#nama'),
        deskripsiInput: () => cy.get('#deskripsi'),
        hargaBeliInput: () => cy.get('.css-rj5r62').eq(3),
        hargaJualInput:() => cy.get('.css-rj5r62').eq(4),
        stokInput:() => cy.get('.css-rj5r62').eq(5),
        kategoriInput: () => cy.get('#kategori'),
        bahanMakananSelect: () => cy.get('.css-u3dlpe').eq(1),
        submitBtn: () => cy.get('.chakra-button'),
        // successAlert: () => cy.get('#toast-1-title'),
        // successMessage: () => cy.get('.chakra-alert__desc css-zycdy9')

        firstCodeField: () => cy.get('.css-u3dlpe').eq(0),
        firstNameField: () => cy.get('.css-u3dlpe').eq(1),
        firstCategoryField: () => cy.get('.css-u3dlpe').eq(2),
        firstHargaBeliField: () => cy.get('.css-u3dlpe').eq(3),
        firstHargaJualField: () => cy.get('.css-u3dlpe').eq(4),
        firstStockField: () => cy.get('.css-u3dlpe').eq(5),
        firstDescField: () => cy.get('.css-u3dlpe').eq(8),
    }

    clickMenuProduct(){
        return cy.get('.css-1mqa38q').eq(5).click(); 
    }

    clickAddProduct(){
        return cy.get('.css-1piskbq', { timeout: 10000 }).click();
    }

    fillForm(nama, deskripsi, hargaBeli, hargaJual, stok){
    // type form

     this.element.namaInput().type(nama);
     this.element.deskripsiInput().type(deskripsi)
     this.element.hargaBeliInput().type(hargaBeli)
     this.element.hargaJualInput().type(hargaJual)
     this.element.stokInput().clear().type(stok)
     this.element.kategoriInput().click()

     this.element.bahanMakananSelect().click();
     
     cy.intercept('GET', 'https://kasir-api.belajarqa.com/products?page=1&q=&withCategory=true&withStock=true').as('newProduct');
     // submit form
     this.element.submitBtn().click()
    }

    newProductRow() {
        cy.wait('@newProduct').then(({ response }) => {
            const {
                code: Code,
                name: Name,
                category_name: Category,
                cost: Cost,
                price: Harga,
                stock: Stock,
                description: Deskripsi
            } = response.body.data.products[0];
    
            const formattedCost = this.formatNumber(Cost);
            const formattedHarga = this.formatNumber(Harga);
            const formattedStock = this.formatNumber(Stock);
    
            this.element.firstCodeField().should('have.text', Code);
            this.element.firstNameField().should('have.text', Name);
            this.element.firstCategoryField().should('have.text', Category);
            this.element.firstHargaBeliField().should('have.text', formattedCost);
            this.element.firstHargaJualField().should('have.text', formattedHarga);
            this.element.firstStockField().should('have.text', formattedStock);
            this.element.firstDescField().should('have.text', Deskripsi);
        });
    }
    
    formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // successAlert(){
    //     return this.element.successAlert()
    // }

    // successMessage(){
    //     return this.element.successMessage()
    // }
}

export const productPage = new ProductPage();