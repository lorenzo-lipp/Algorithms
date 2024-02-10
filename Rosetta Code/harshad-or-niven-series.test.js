let { harshadOrNiven } = require("./harshad-or-niven-series");

describe("Testing harshadOrNiven", () => {
    it("should be a function", () => {
        expect(typeof harshadOrNiven).toBe("function");
    });

    it("should return [12, 18, 20, 21, 24, 27, 30, 36, 40, 42] when input 10", () => {
        expect(harshadOrNiven(10)).toStrictEqual([12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
    });

    it("should return [402, 405, 407, 408, 410, 414, 420, 423, 432, 440] when input 400", () => {
        expect(harshadOrNiven(400)).toStrictEqual([402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
    });

    it("should return [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020] when input 1000", () => {
        expect(harshadOrNiven(1000)).toStrictEqual([1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
    });
});