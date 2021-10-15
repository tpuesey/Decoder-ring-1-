const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function inputChecker(alphabet) {
        switch (true) {
            case (alphabet === undefined): //no alphabet passed
                return false;
            case (alphabet.length != 26): //alphabet has incorrect length
                return false;
            default: //otherwise, search for duplicates
                for (letter of alphabet) { //unique letter's index will always equal last index
                    if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) return false;
                }
        }
    }

    function substitution(input, alphabet, encode = true) {
        if (inputChecker(alphabet) === false) return false; //exiting early
        const originalAlphabet = "abcdefghijklmnopqrstuvwxyz "; //space was included into alphabet intentionally
        const codeAlphabet = [...alphabet, " "]; //including space to alternative alphabet
        input = input.toLowerCase();
        const code = [];

        if (encode === true) {
            for (let i = 0; i < input.length; i++) {
                code.push(codeAlphabet[originalAlphabet.indexOf(input[i])]);
            }
        } else {
            for (let i = 0; i < input.length; i++) {
                code.push(originalAlphabet[codeAlphabet.indexOf(input[i])]);
            }
        }
        return code.join("");
    }

    return {
        substitution,
    };
})();

module.exports = substitutionModule.substitution;