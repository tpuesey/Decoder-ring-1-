const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("Substitution", () => {

    it("Should return false if input was not provided", () => {
        const expected = false;
        const actual = substitutionModule("message");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet was not provided", () => {
        const expected = false;
        const actual = substitutionModule("message");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule("message", "plmoknijbuhvygctfxrdzeswaqaaaaa");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule("message", "plmoknij");
        expect(actual).to.equal(expected);
    });

    it("should return false if duplicate values found in the given alphabet", () => {
        const expected = false;
        const actual = substitutionModule("message", "abcdefghijklmnopqrstuvwxyy");
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces in the message", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("Decoding", () => {
        const expected = "message";
        const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

});


describe("substitution() submission tests written by Thinkful", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const message = "message";
            const actual = substitution(message);
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const message = "message";
            const alphabet = "short";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const message = "message";
            const alphabet = "abcabcabcabcabcabcabcabcab";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });

    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";

            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const message = "message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "ysii.rs";

            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            const message = "ykrrpik";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const message = "ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "my message";

            expect(actual).to.equal(expected);
        });
    });
});