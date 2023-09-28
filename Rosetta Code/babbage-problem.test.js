let { babbage } = require("./babbage-problem");

describe("Testing babbage problem", () => {
    it("should be a function", () => {
        expect(typeof babbage).toBe("function");
    });

    it("should return 25264 when inputs 99736 and 269696", () => {        
        expect(babbage(99736, 269696)).toBe(25264);
    });
});