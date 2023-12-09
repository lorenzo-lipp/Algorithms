const { romanNumerals } = require("./problem-089");
const fs = require("fs");

const testNumerals1 = [
    'XIIIIII', 'XVI', 'MMMCCLXVIIII', 'XXXXVI', 'MMMMXX', 'CCLI', 'CCCCXX', 'MMMMDCXXXXI', 'DCCCCIIII', 'MXVIIII'
];
const testNumerals2 = JSON.parse(fs.readFileSync("./problem-089.test.json"));

describe("Testing problem 89: roman numerals", () => {
    it("should return a number", () => {
        expect(typeof romanNumerals(testNumerals1)).toBe("number");
    });

    it("should return 21 when input testNumerals1", () => {
        expect(romanNumerals(testNumerals1)).toBe(21);
    });

    it("should return 743 when input testNumerals2", () => {
        expect(romanNumerals(testNumerals2)).toBe(743);
    });
});