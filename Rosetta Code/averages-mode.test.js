let { mode } = require("./averages-mode");

describe("Testing mode problem", () => {
    it("should be a function", () => {
        expect(typeof mode).toBe("function");
    });

    it("should return [6] when input [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]", () => {        
        expect(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])).toEqual([6]);
    });

    it("should return [1, 4] when input [1, 2, 4, 4, 1]", () => {        
        expect(mode([1, 2, 4, 4, 1])).toEqual([1, 4]);
    });
});
