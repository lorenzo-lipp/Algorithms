const { pokerHands } = require("./problem-054");
const fs = require("fs");

const testArr = [
    '8C TS KC 9H 4S 7D 2S 5D 3S AC',
    '5C AD 5D AC 9C 7C 5H 8D TD KS',
    '3H 7H 6S KC JS QH TD JC 2D 8S',
    'TH 8H 5C QS TC 9H 4D JC KS JS',
    '7C 5H KC QH JD AS KH 4C AD 4S'
];

const handsArr = JSON.parse(fs.readFileSync("./problem-054.test.json"));

describe("Testing problem 54: poker hands", () => {
    it("should return a number", () => {
        expect(typeof pokerHands(testArr)).toBe("number");
    });

    it("should return 2 when input testArr", () => {
        expect(pokerHands(testArr)).toBe(2);
    });

    it("should return 376 when input handsArr", () => {
        expect(pokerHands(handsArr)).toBe(376);
    });
});