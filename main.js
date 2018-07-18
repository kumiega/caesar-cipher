function encryptString() {

    let alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'x', 'y', 'z', 'ż', 'ź'];
    const toCipher = document.querySelector('.js-input').value.toLowerCase();
    console.log(toCipher);
    let shiftingOfTheCipher = document.querySelector('.js-input--value').value;
    console.log(shiftingOfTheCipher);
    const cipherArray = [...toCipher];

    let alphabetShifted = [...alphabet];
    alphabetShifted = alphabetShifted.concat(alphabetShifted.splice(0, shiftingOfTheCipher));

    let encryptedArray = [];

    for (let i = 0; i <= cipherArray.length; i++) {

        for (let j = 0; j <= alphabet.length; j++) {

            if (cipherArray[i] == alphabet[j]) {
                encryptedArray.push(alphabetShifted[j]);
                break;
            } else if (cipherArray[i] == ' ') {
                encryptedArray.push(cipherArray[i]);
                break;
            }
        }
    }

    const encryptedText = encryptedArray.toString().replace(/,/g, "");
    return document.querySelector('.js-input--result').value = encryptedText;
}

const encryptButton = document.querySelector('.js-form__button');
encryptButton.addEventListener('click', encryptString);

const btnDown = document.querySelector('.js-btn--minus');
const btnUp = document.querySelector('.js-btn--plus');
const valueBox = document.querySelector('.js-input--value');

const limit = 32;
const shiftValue = 1;

function valueUp() {
    
    if (shiftValue < limit) {
        shiftValue++;
        return valueBox.value = shiftValue;
    } else {
        shiftValue = 1;
        return valueBox.value = shiftValue;
    }
}

function valueDown() {
    
    if (shiftValue <= 1) {
        shiftValue = limit;
        return valueBox.value = shiftValue;
    } else {
        shiftValue--;
        return valueBox.value = shiftValue;
    }
}


btnDown.addEventListener('click', valueDown);
btnUp.addEventListener('click', valueUp);
