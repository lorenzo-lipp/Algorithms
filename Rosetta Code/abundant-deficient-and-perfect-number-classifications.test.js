let { getDPA } = require("./abundant-deficient-and-perfect-number-classifications");

describe("Testing number classifications problem", () => {
    it("should return an array with length 3", () => {
        let arr = getDPA(5000);

        expect(Array.isArray(arr)).toBe(true);
        expect(arr.length).toBe(3);
    });

    it("should return [3758, 3, 1239] when input 5000", () => {
        expect(getDPA(5000)).toEqual([3758, 3, 1239]);
    });

    it("should return [7508, 4, 2488] when input 10000", () => {
        expect(getDPA(10000)).toEqual([7508, 4, 2488]);
    });

    it("should return [15043, 4, 4953] when input 20000", () => {
        expect(getDPA(20000)).toEqual([15043, 4, 4953]);
    });
});