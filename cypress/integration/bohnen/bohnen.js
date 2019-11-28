import {Given as Angenommen, Then as Dann, When as Wenn} from 'cypress-cucumber-preprocessor/steps';

import {expectInputToEqual} from '../common/expectations';
import {setInputValue} from '../common/puppetMaster';

Dann('sind folgende Bohnenarten in der Anwendung sichtbar', function (dataTable) {
    dataTable.hashes().forEach(d => {
        const art = d['Bohne'];
        const ekp = d['Einkaufspreis in Euro'];
        const vkp = d['Verkaufspreis in Euro'];
        const marge = d['Marge in Prozent'];
        expectInputToEqual('#art', art);
        expectInputToEqual('#ekp', ekp);
        expectInputToEqual('#vkp', vkp);
        expectInputToEqual('#marge', marge);
    });
});

Wenn('der Bohnenverkäufer den Einkaufspreis auf {string} Euro setzt', function (ekp) {
    setInputValue('#ekp', ekp);
});
