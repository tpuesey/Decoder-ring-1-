const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if shift not present", () => {
        let input = "tim";
        let shift = undefined;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift = 0", () => {
        let input = "tim";
        let shift = 0;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
        let input = "hey";
        let shift = 28;
        let actual = caesar(input, shift, (encode = true));
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift less than -25", () => {
        let input = "hey";
        let shift = -28;
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
        let input1 = "Hello World";
        let input2 = "hello world";
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