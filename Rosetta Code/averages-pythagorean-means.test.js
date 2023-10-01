let { pythagoreanMeans } = require("./averages-pythagorean-means");

describe("Testing pythagorean means problem", () => {
    it("should be a function", () => {
        expect(typeof pythagoreanMeans).toBe("function");
    });

    it("should return the correct result when input range 1 to 10", () => {
        let expectedObject = {
            values: {
              Arithmetic: 5.5,
              Geometric: 4.528728688116765,
              Harmonic: 3.414171521474055
            },
            test: 'is A >= G >= H ? yes'
        };
        
        expect(pythagoreanMeans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(expectedObject);
    });
});