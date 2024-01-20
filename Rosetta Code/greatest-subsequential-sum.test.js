let { maximumSubsequence } = require("./greatest-subsequential-sum");

describe("Testing maximumSubsequence", () => {
    it("should be a function", () => {
        expect(typeof maximumSubsequence).toBe("function");
    });

    it("should return an array", () => {
        expect(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10]))).toBe(true);
    });

    it("should return [1, 2, -1, 3, 10] when input [1, 2, -1, 3, 10, -10]", () => {
        expect(maximumSubsequence([1, 2, -1, 3, 10, -10])).toStrictEqual([1, 2, -1, 3, 10]);
    });

    it("should return [0, 8, 10] when input [0, 8, 10, -2, -4, -1, -5, -3]", () => {
        expect(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3])).toStrictEqual([0, 8, 10]);
    });

    it("should return [9, 9] when input [9, 9, -10, 1]", () => {
        expect(maximumSubsequence([9, 9, -10, 1])).toStrictEqual([9, 9]);
    });

    it("should return [7, 1] when input [7, 1, -5, -3, -8, 1]", () => {
        expect(maximumSubsequence([7, 1, -5, -3, -8, 1])).toStrictEqual([7, 1]);
    });

    it("should return [6, -1, 4] when input [-3, 6, -1, 4, -4, -6]", () => {
        expect(maximumSubsequence([-3, 6, -1, 4, -4, -6])).toStrictEqual([6, -1, 4]);
    });

    it("should return [3, 5, 6, -2, -1, 4] when input [-1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1]", () => {
        expect(maximumSubsequence([-1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1])).toStrictEqual([3, 5, 6, -2, -1, 4]);
    });

    it("should return [] when input is all negative numbers", () => {
        expect(maximumSubsequence([-1, -2, -3, -5, -20])).toStrictEqual([]);
    });
});