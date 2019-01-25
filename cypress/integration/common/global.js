import {Given as Angenommen, Then as Dann} from 'cypress-cucumber-preprocessor/steps';
import {updateData} from '../../../src/reducer';
import {expectInputToEqual} from './expectations';

export function oeffneAnwendung() {
    cy.visit('/');
}

Angenommen('die Anwendung ist geöffnet', function () {
    oeffneAnwendung();
});

Angenommen('es gibt folgende Bohnenarten in der Anwendung', function (dataTable) {
    for (const row of dataTable.hashes()) {
        const id = row['Id'];
        const art = row['Bohne'];
        const ekp = row['Einkaufspreis in Euro'];
        const vkp = row['Verkaufspreis in Euro'];
        const marge = row['Marge in Prozent'];
        cy
            .window()
            .its('store')
            .invoke('dispatch', updateData({id, art, ekp, vkp, marge}));
    }
});


Dann('ist der Verkaufspreis {string} Euro', function (vkp) {
    expectInputToEqual('#vkp', vkp);
});