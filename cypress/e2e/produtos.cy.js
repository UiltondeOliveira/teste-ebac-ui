/// <reference types="cypress" />

describe('Funcionalidade: Página de produtos', () => {

    beforeEach(() => {
        cy.visit("produtos/")
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('.product-block')
            .contains('Abominable Hoodie').click()

            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho  - Usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', 3)
    });

    it('Deve adicionar produtos ao carrinho  - Usando comando customizado', () => {
        cy.addProdutos('Aether Gym Pant', 36, 'Blue', 8)
    });
});