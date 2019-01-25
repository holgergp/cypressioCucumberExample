export function setInputValue(selector, value) {
    cy.get(selector).type(`{selectall}{backspace}${value}`);
}