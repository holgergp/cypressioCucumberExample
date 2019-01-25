import {updateData} from '../../../src/reducer';
import {Given as Angenommen, Then as Dann, When as Wenn} from 'cypress-cucumber-preprocessor/steps';
import {setInputValue} from '../common/puppetMaster';
import {expectInputToEqual} from '../common/expectations';



Wenn('der Bohnenverkäufer einen Rabatt von {string} Prozent gewährt', function (rabatt) {
    setInputValue('#rabatt', rabatt);
});

Dann('ist der Rabatt von {string} Prozent in der Anwendung sichtbar', function (rabatt) {
    expectInputToEqual('#rabatt', rabatt);
});

Dann('ist der Verkaufspreis mit Rabatt {string} Euro', function (vkpRabatt) {
    expectInputToEqual('#vkpRabatt', vkpRabatt);
});