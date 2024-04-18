let { fib_luc } = require("./fibonacci-n-step-number-sequences");

describe("Testing fib_luc", () => {
    it("should be a function", () => {
        expect(typeof fib_luc).toBe("function");
    });

    it("should return [1,1,2,3,5,8,13,21,34,55] as the first 10 terms of fibonacci", () => {
        expect(fib_luc(2, 10, "f")).toStrictEqual([1,1,2,3,5,8,13,21,34,55]);
    });

    it("should return [1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136] as the first 15 terms of tribonacci", () => {
        expect(fib_luc(3, 15, "f")).toStrictEqual([1,1,2,4,7,13,24,44,81,149,274,504,927,1705,3136]);
    });

    it("should return [1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536] as the first 15 terms of tetranacci", () => {
        expect(fib_luc(4, 15, "f")).toStrictEqual([1,1,2,4,8,15,29,56,108,208,401,773,1490,2872,5536]);
    });

    it("should return [2,1,3,4,7,11,18,29,47,76] as the first 10 terms of lucas sequence", () => {
        expect(fib_luc(2, 10, "l")).toStrictEqual([2,1,3,4,7,11,18,29,47,76]);
    });

    it("should return [2,1,3,6,10,19,35,64,118,217,399,734,1350,2483,4567] as the first 15 terms of (tri) lucas sequence", () => {
        expect(fib_luc(3, 15, "l")).toStrictEqual([2,1,3,6,10,19,35,64,118,217,399,734,1350,2483,4567]);
    });

    it("should return [2,1,3,6,12,22,43,83,160,308,594,1145,2207,4254,8200] as the first 15 terms of (tetra) lucas sequence", () => {
        expect(fib_luc(4, 15, "l")).toStrictEqual([2,1,3,6,12,22,43,83,160,308,594,1145,2207,4254,8200]);
    });

    it("should return [2,1,3,6,12,24,46,91,179,352,692,1360,2674,5257,10335] as the first 15 terms of (penta) lucas sequence", () => {
        expect(fib_luc(5, 15, "l")).toStrictEqual([2,1,3,6,12,24,46,91,179,352,692,1360,2674,5257,10335]);
    });
});