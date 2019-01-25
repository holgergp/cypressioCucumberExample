import {getInputValue} from './puppetMaster';

export function expectInputToEqual(selector, expectation) {
    cy.get(selector).should('have.value', expectation);
}