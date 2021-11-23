let firstName;
let lastName;
let numberOfGroup;
let yearOfBirth;

firstName = 'Halyna';
lastName = 'Tesliuk';
numberOfGroup = 654;
yearOfBirth = 1987;
let isMarried = true;

const data = new Array(firstName, lastName, numberOfGroup, yearOfBirth, isMarried);
let numberType = '';
let booleanType = '';
let stringType = '';
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        numberType += data[i] + ' ';
    }
    if (typeof data[i] === 'boolean') {
        booleanType += data[i] + ' ';
    }
    if (typeof data[i] === 'string') {
        stringType += data[i] + ' ';
    }
}
console.log('Value variables with number type : ' + numberType);
console.log('Value of variables with boolean type : ' + booleanType);
console.log('Value of variables with string type : ' + stringType);

document.write('Value variables with number type : ' + numberType + '<br /\>' + '<br /\>');
document.write('Value of variables with boolean type : ' + booleanType + '<br\/>' + '<br /\>');
document.write('Value of variables with string type : ' + stringType + '<br\/>' + '<br /\>');

let carBrand = null;
let laptopBrand;

document.write('Type of carBrand: ' + typeof carBrand + '<br\/>' + '<br\/>');
document.write('Type of laptopBrand: ' + typeof laptopBrand + '<br\/>')