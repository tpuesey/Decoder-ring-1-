// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe("Returns 'false' if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    it("should return false if shift is equal to 0", () => {
        const shift = 0;
        const input = "Zebra Magazine";
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const shift = -26;
        const input = "Zebra Magazine";
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
        const shift = 26;
        const input = "Zebra Magazine";
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
});

describe("Encoding Messages", () => {
    it("should produce the same result regardless if capital letters are used", () => {
        const shift = 3;
        const input = "A Message";
        const expected = "d phvvdjh";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);

    });
    it("When encoding, it handles shifts that go past the end of the alphabet", () => {
        const shift = 3;
        const input = "z";
        const expected = "c";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    });
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        const shift = 3;
        const input = "! A Message !"
        const expected = "! d phvvdjh !";
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected);
    });
});