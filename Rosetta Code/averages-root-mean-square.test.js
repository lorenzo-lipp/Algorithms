let { rms } = require("./averages-root-mean-square");

describe("Testing root mean square problem", () => {
    it("should be a function", () => {
        expect(typeof rms).toBe("function");
    });

    it("should return 6.2048368229954285 when input range 1 to 10", () => {        
        expect(rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(6.2048368229954285);
    });
});