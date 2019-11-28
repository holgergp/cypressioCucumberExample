import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

import {expectInputToEqual} from '../common/expectations';
import {setInputValue} from '../common/puppetMaster';


Then('following beans are visible in the application', function (dataTable) {
    dataTable.hashes().forEach(d => {
        const art = d['Bean'];
        const ekp = d['Price in Euro'];
        const vkp = d['Selling Price in Euro'];
        const marge = d['Margin in Percent'];
        expectInputToEqual('#art', art);
        expectInputToEqual('#ekp', ekp);
        expectInputToEqual('#vkp', vkp);
        expectInputToEqual('#marge', marge);
    });
});

When('the seller sets the price to {string} Euro', function (ekp) {
    setInputValue('#ekp', ekp);
});
