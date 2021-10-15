// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if shift not present", () => {
        let input = "hey";
        let shift = undefined;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift = 0", () => {
        let input = "hey";
        let shift = 0;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
        let input = "hey";
        let shift = 30;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift less than -25", () => {
        let input = "hey";
        let shift = -30;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return wklqnixo when given thinkful", () => {
        let input = "thinkful";
        let shift = 3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });
    it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", () => {
        let input = "bpqa qa i amkzmb umaaiom";
        let shift = -8;
        let actual = caesar(input, shift, (encode = true));
        let expected = "this is a secret message";
        expect(actual).to.equal(expected);
    });
    it("should return thinkful when given wklqnixo", () => {
        let input = "wklqnixo";
        let shift = -3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("spaces and characters should be maintained", () => {
        let input = "@#$% *&^&*&^ @#$%$#@";
        let shift = -3;
        let actual = caesar(input, shift, (encode = true));
        let expected = "@#$% *&^&*&^ @#$%$#@";
        expect(actual).to.equal(expected);
    });
    it("should invert shift (decode) if encode is false", () => {
        let input = "bpqa qa i amkzmb umaaiom";
        let shift = 8;
        let encode = false;
        let actual = caesar(input, shift, encode);
        let expected = "this is a secret message";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        let input1 = "A Message";
        let input2 = "a message";
        let shift = 8;
        let encode = true;
        let actual = caesar(input1, shift, encode);
        let expected = caesar(input2, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet.", () => {
        let input1 = "z";
        let shift = 3;
        let encode = true;
        let actual = caesar(input1, shift, encode);
        let expected = "c";
        expect(actual).to.equal(expected);
    });
});

describe("caesar() submission tests written by Thinkful", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
            const message = "zebra magazine";
            const shift = 0;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is above 25", () => {
            const message = "zebra magazine";
            const shift = 26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });

        it("should return false if the shift amount is less than -25", () => {
            const message = "zebra magazine";
            const shift = -26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
    });

    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "message";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "phvvdjh";

            expect(actual).to.equal(expected);
        });

        it("should leaves spaces and other symbols as is", () => {
            const message = "a message.";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh.";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const message = "A Message";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "d phvvdjh";

            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "zebra magazine";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "cheud pdjdclqh";

            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift that will shift to the left", () => {
            const message = "zebra magazine";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "wbyox jxdxwfkb";

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const message = "phvvdjh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should leaves spaces and other symbols as is", () => {
            const message = "d phvvdjh.";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "a message.";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const message = "D pHvvdjh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "a message";

            expect(actual).to.equal(expected);
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "cheud pdjdclqh";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "zebra magazine";

            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift that will shift to the left", () => {
            const message = "wbyox jxdxwfkb";
            const shift = -3;
            const actual = caesar(message, shift, false);
            const expected = "zebra magazine";

            expect(actual).to.equal(expected);
        });
    });
});