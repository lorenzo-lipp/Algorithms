let { amicablePairsUpTo } = require("./amicable-pairs");

describe("Testing amicable pairs problem", () => {
    it("should return an array", () => {
        expect(Array.isArray(amicablePairsUpTo(300))).toBe(true);
    });

    it("should return the correct result when input 300", () => {
        expect(amicablePairsUpTo(300)).toEqual([[220,284]]);
    });

    it("should return the correct result when input 3000", () => {
        expect(amicablePairsUpTo(3000)).toEqual([
            [220,284],
            [1184,1210],
            [2620,2924]
        ]);
    });

    it("should return the correct result when input 20000", () => {
        expect(amicablePairsUpTo(20000)).toEqual([
            [220,284],
            [1184,1210],
            [2620,2924],
            [5020,5564],
            [6232,6368],
            [10744,10856],
            [12285,14595],
            [17296,18416]
        ]);
    });
});