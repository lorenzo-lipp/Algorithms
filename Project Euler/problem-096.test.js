const { suDoku } = require("./problem-096");
const fs = require("fs");

const testPuzzles1 = [
    '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
    '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
    '000000907000420180000705026100904000050000040000507009920108000034059000507000000'
];
const testPuzzles2 = JSON.parse(fs.readFileSync("./problem-096.test.json"));

describe("Testing problem 96: sudoku", () => {
    it("should return a number", () => {
        expect(typeof suDoku(testPuzzles1)).toBe("number");
    });

    it("should return 1190 when input testPuzzles1", () => {
        expect(suDoku(testPuzzles1)).toBe(1190);
    });

    it("should return 24702 when input testPuzzles2", () => {
        expect(suDoku(testPuzzles2)).toBe(24702);
    });
});