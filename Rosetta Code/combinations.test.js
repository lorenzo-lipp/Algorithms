let { combinations } = require("./combinations");

describe("Testing combinations", () => {
    it("should be a function", () => {
        expect(typeof combinations).toBe("function");
    });

    it("should produce the right result when m = 3 and n = 5", () => {
        expect(combinations(3, 5)).toStrictEqual([
            [0, 1, 2], 
            [0, 1, 3], 
            [0, 1, 4], 
            [0, 2, 3], 
            [0, 2, 4], 
            [0, 3, 4], 
            [1, 2, 3], 
            [1, 2, 4], 
            [1, 3, 4], 
            [2, 3, 4]
        ]);
    });

    it("should produce the right result when m = 4 and n = 6", () => {
        expect(combinations(4, 6)).toStrictEqual([
            [0, 1, 2, 3], 
            [0, 1, 2, 4], 
            [0, 1, 2, 5], 
            [0, 1, 3, 4], 
            [0, 1, 3, 5], 
            [0, 1, 4, 5], 
            [0, 2, 3, 4], 
            [0, 2, 3, 5], 
            [0, 2, 4, 5], 
            [0, 3, 4, 5], 
            [1, 2, 3, 4], 
            [1, 2, 3, 5], 
            [1, 2, 4, 5], 
            [1, 3, 4, 5], 
            [2, 3, 4, 5]
        ]);
    });
});