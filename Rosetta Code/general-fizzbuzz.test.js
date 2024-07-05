let { genFizzBuzz } = require("./general-fizzbuzz");

describe("Testing genFizzBuzz", () => {
    it("should be a function", () => {
        expect(typeof genFizzBuzz).toBe("function");
    });

    it("should return a string", () => {
        expect(typeof genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)).toBe("string");
    });

    it("should return 'Fizz' when rules=[[3, 'Fizz'],[5, 'Buzz']] and num=6", () => {
        expect(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)).toBe("Fizz");
    });

    it("should return 'Buzz' when rules=[[3, 'Fizz'],[5, 'Buzz']] and num=10", () => {
        expect(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)).toBe("Buzz");
    });

    it("should return 'Buzz' when rules=[[3, 'Buzz'],[5, 'Fizz']] and num=12", () => {
        expect(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)).toBe("Buzz");
    });

    it("should return '13' when rules=[[3, 'Buzz'],[5, 'Fizz']] and num=13", () => {
        expect(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)).toBe("13");
    });

    it("should return 'BuzzFizz' when rules=[[3, 'Buzz'],[5, 'Fizz']] and num=15", () => {
        expect(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)).toBe("BuzzFizz");
    });

    it("should return 'FizzBuzz' when rules=[[3, 'Fizz'],[5, 'Buzz']] and num=15", () => {
        expect(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)).toBe("FizzBuzz");
    });

    it("should return 'FizzBuzzBaxx' when rules=[[3, 'Fizz'],[5, 'Buzz'],[7, 'Baxx']] and num=105", () => {
        expect(genFizzBuzz([[3, "Fizz"],[5, "Buzz"], [7, "Baxx"]], 105)).toBe("FizzBuzzBaxx");
    });
});
