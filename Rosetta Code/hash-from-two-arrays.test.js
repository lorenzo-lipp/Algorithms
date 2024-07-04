let { arrToObj } = require("./hash-from-two-arrays");

describe("Testing arrToObj", () => {
    it("should be a function", () => {
        expect(typeof arrToObj).toBe("function");
    });

    it("should return the correct objects based on input", () => {
        expect(arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])).toStrictEqual({ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" });
        expect(arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])).toStrictEqual({ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined });
        expect(arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])).toStrictEqual({ 1: "a", 2: "b", 3: "c" });
        expect(arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])).toStrictEqual({ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 });
        expect(arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])).toStrictEqual({ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined });
        expect(arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])).toStrictEqual({ "a": 1, "b": 2, "c": 3 });
    });
});