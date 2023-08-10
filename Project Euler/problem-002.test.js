const { fiboEvenSum } = require("./problem-002");

describe("Testing problem 2: even Fibonnaci numbers", () => {
    it("should return a number", () => {
        expect(typeof fiboEvenSum(10)).toBe("number");
    })

    it("should return an even value", () => {
        expect(fiboEvenSum(10) % 2).toBe(0);
    })

    it("should return 10 when input 8", () => {
        expect(fiboEvenSum(8)).toBe(10);
    })

    it("should return 10 when input 10", () => {
        expect(fiboEvenSum(10)).toBe(10);
    })

    it("should return 44 when input 34", () => {
        expect(fiboEvenSum(34)).toBe(44);
    })

    it("should return 44 when input 60", () => {
        expect(fiboEvenSum(60)).toBe(44);
    })

    it("should return 798 when input 1000", () => {
        expect(fiboEvenSum(1000)).toBe(798);
    })

    it("should return 60696 when input 100000", () => {
        expect(fiboEvenSum(100000)).toBe(60696);
    })

    it("should return 4613732 when input 4000000", () => {
        expect(fiboEvenSum(4000000)).toBe(4613732);
    })
})