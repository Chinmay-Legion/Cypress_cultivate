/// <reference types="cypress" />


it('navigate', function(){
    cy.visit('https://www.cultivate.asia/')
    cy.get('a[href*="about"]').eq(0).click()
})