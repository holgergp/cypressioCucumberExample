export function setInputValue(selector, value) {
    cy.get(selector).type(value);
}