'use strict';

console.log(validCard('378282246310005'))
console.log(validCard('6011111111111117'))
console.log(validCard('2222222222225522'))
console.log(validCard('1234567819123545'))
console.log(validCard('378282246310005'))




function validCard(input) {

    let creditCardInt = input.split('').map(Number);

    for (let i = creditCardInt.length - 2; i >=0; i = i -2) {

        let tempValue = creditCardInt[i];

        tempValue = tempValue * 2;

        if (tempValue > 9) {
            tempValue = tempValue % 10 + 1;

        }

        creditCardInt[i] = tempValue;

    }

    let total = 0;

    for (let i = 0; i < creditCardInt.length; i++) {
        total += creditCardInt[i];
    }

    return total % 10 == 0;
}