// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("Substitution Tests", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const input = "thinkful";
        const cipher = "qwertyuiopasdfghjklzxcvbn";
        const actual = substitution(input, cipher, true);
        expect(actual).to.be.false
    });
    it("correctly translates the given phrase, based on the alphabet given to the function", () => {
        const input = "secret message";
        const cipher = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "ltektz dtllqut"
        const actual = substitution(input, cipher, true);
        expect(actual).to.equal(expected);
    });
    it("returns false if there are any duplicate characters in the given alphabet", () => {
        const input = "duplicates";
        const cipher = "aacdefghijklmnopqrstuvwxyz";
        const actual = substitution(input, cipher, true);
        expect(actual).to.be.false;
    });
    it("maintains spaces in the message, before and after encoding or decoding", () => {
        const input = "maintains all the spaces";
        const cipher = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "dqofzqofl qss zit lhqetl";
        const actual = substitution(input, cipher, true);
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const input = "CAPSLOCK";
        const cipher = "qwertyuiopasdfghjklzxcvbnm";
        const expected = "eqhlsgea";
        const actual = substitution(input, cipher, true);
        expect(actual).to.equal(expected);
    })
});