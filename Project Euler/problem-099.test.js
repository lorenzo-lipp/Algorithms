const { largestExponential } = require("./problem-099");
const fs = require("fs");

const testBaseExp1 = [
    [492798,527927],[30125,670983],[895603,504906],
    [450785,531539],[840237,507276],[380711,538522],
    [63577,625673],[76801,615157],[502694,527123]
];
const testBaseExp2 = JSON.parse(fs.readFileSync("./problem-099.test.json"));

describe("Testing problem 99: largest exponential", () => {
    it("should return an array", () => {
        expect(Array.isArray(largestExponential(testBaseExp1))).toBe(true);
    });

    it("should return [492798,527927] when input testBaseExp1", () => {
        expect(largestExponential(testBaseExp1)).toStrictEqual([492798,527927]);
    });

    it("should return [895447, 504922] when input testBaseExp2", () => {
        expect(largestExponential(testBaseExp2)).toStrictEqual([895447, 504922]);
    });
});