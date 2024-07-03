let { fizzBuzz } = require("./fizzbuzz");

describe("Testing fizzBuzz", () => {
    it("should be a function", () => {
        expect(typeof fizzBuzz).toBe("function");
    });

    it("should return an array", () => {
        expect(Array.isArray(fizzBuzz())).toBe(true);
    });

    it("should return 'Fizz' for numbers divisible only by 3", () => {
        let arr = fizzBuzz();

        expect(arr.every((v, i) => {
            if ((i + 1) % 5 === 0) return true;
            else if ((i + 1) % 3 === 0) return v === "Fizz";
            else return true;
        })).toBe(true);
    });

    it("should return 'Buzz' for numbers divisible only by 5", () => {
        let arr = fizzBuzz();

        expect(arr.every((v, i) => {
            if ((i + 1) % 3 === 0) return true;
            else if ((i + 1) % 5 === 0) return v === "Buzz";
            else return true;
        })).toBe(true);
    });

    it("should return 'FizzBuzz' for numbers divisible by 3 and 5", () => {
        let arr = fizzBuzz();

        expect(arr.every((v, i) => {
            if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) return v === "FizzBuzz";
            else return true;
        })).toBe(true);
    });

    it("should return the number itself for numbers undivisible by 3 or 5", () => {
        let arr = fizzBuzz();

        expect(arr.every((v, i) => {
            if ((i + 1) % 3 === 0 || (i + 1) % 5 === 0) return true;
            else return v === i + 1;
        })).toBe(true);
    });
});

