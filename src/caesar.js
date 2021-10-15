// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function caesar(input, shift, encode = true) {
        if (!shift || shift === 0 || shift < -25 || shift > 25) {
            return false;
        }

        if (encode) {
            shift *= 1;
        } else {
            shift *= -1;
        }
        let inputArray = inputToArrayOfCharacters(input);
        const codedMessage = inputArray.map((character) => {
            let shiftedIndex = alphabet.indexOf(character) + shift;

            if (shiftedIndex > 25) {
                shiftedIndex -= 26;
            }
            if (shiftedIndex < 0) {
                shiftedIndex += 26;
            }
            if (character === " " || !alphabet.includes(character)) {
                return character;
            }
            character = alphabet[shiftedIndex];
            return character;
        });

        return codedMessage.join("");
    }

    function inputToArrayOfCharacters(input) {
        let inputArray = [];
        for (let i = 0; i < input.length; i++) {
            let lowercase = input[i].toLowerCase();
            inputArray.push(lowercase);
        }
        return inputArray;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };