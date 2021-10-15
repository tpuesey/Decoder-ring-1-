const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius function", () => {
    it("encodes an input of letters into numbers", () => {
        const input = "three";
        const actual = polybius(input);
        const expected = "4432245151";

        expect(actual).to.equal(expected);
    });
    it("decodes an input of numbers into letters", () => {
        const input = "4432245151";
        const actual = polybius(input, false);
        const expected = "three";

        expect(actual).to.equal(expected);
    });
    it("encodes both the letters i and j to 42", () => {
        const input = "ij";
        const actual = polybius(input);
        const expected = "4242";

        expect(actual).to.equal(expected);
    });
    it("decodes the number 42 to (i/j)", () => {
        const input = "42";
        const actual = polybius(input, false);
        const expected = "(i/j)";

        expect(actual).to.equal(expected);
    });
    it("ignores capital letters (treats lowercase and uppercase letters as the same)", () => {
        const lowercaseInput = "three";
        const uppercaseInput = "THREE";
        const lowercaseCall = polybius(lowercaseInput);
        const uppercaseCall = polybius(uppercaseInput);

        expect(lowercaseCall).to.equal(uppercaseCall);
    });
    it("maintains spaces in the message before and after encoding", () => {
        const input = "three little pigs";
        const actual = polybius(input);
        const expected = "4432245151 134244441351 53422234";

        expect(actual).to.equal(expected);
    });
    it("maintains spaces in the message before and after decoding", () => {
        const input = "4432245151 134244441351 53422234";
        const actual = polybius(input, false);
        const expected = "three l(i/j)ttle p(i/j)gs";

        expect(actual).to.equal(expected);
    });
});


describe("polybius() submission tests written by Thinkful", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";

            expect(actual).to.equal(expected);
        });

        it("should translate both 'i' and 'j' to 42", () => {
            const message = "jiggle";
            const actual = polybius(message);
            const expected = "424222221351";

            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const message = "my message";
            const actual = polybius(message);
            const expected = "2345 23513434112251";

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should translate 42 to both 'i' and 'j'", () => {
            const message = "424222221351";
            const actual = polybius(message, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("should leave spaces as is", () => {
            const message = "2345 23513434112251";
            const actual = polybius(message, false);
            const expected = "my message";

            expect(actual).to.equal(expected);
        });

        it("should return false if the length of all numbers is odd", () => {
            const message = "2345 235134341122514";
            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
    });
});