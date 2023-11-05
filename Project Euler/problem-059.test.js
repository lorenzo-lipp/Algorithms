const { XORDecryption } = require("./problem-059");
const fs = require("fs");

const cipher = JSON.parse(fs.readFileSync("./problem-059.test.json"));

describe("Testing problem 59: XOR decryption", () => {
    it("should return a number", () => {
        expect(typeof XORDecryption(cipher)).toBe("number");
    });

    it("should return 129448 when input cipher", () => {
        expect(XORDecryption(cipher)).toBe(129448);
    });
});