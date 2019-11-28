import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
import {updateData} from '../../../src/reducer';

export function openApplication() {
    cy.visit('/');
}

Given('the application is open', function () {
    openApplication();
});

Given('there are the following beans in the application', function (dataTable) {
    for (const row of dataTable.hashes()) {
        const id = row['Id'];
        const art = row['Bean'];
        const ekp = row['Price in Euro'];
        const vkp = row['Selling Price in Euro'];
        const marge = row['Margin in Percent'];
        cy
            .window()
            .its('store')
            .invoke('dispatch', updateData({id, art, ekp, vkp, marge}));
    }
});
