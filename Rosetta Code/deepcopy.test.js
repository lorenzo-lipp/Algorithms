let { deepcopy } = require("./deepcopy");

describe("Testing deep copy problem", () => {
    it("should be a function", () => {
        expect(typeof deepcopy).toBe('function');
    });

    it("should return an object", () => {
        expect(typeof deepcopy({test: "test"})).toBe('object');
    });

    it("should not return the same object that was provided", () => {
        let testObj = {test: "test"};

        expect(deepcopy(testObj) === testObj).toBe(false);
    });

    it("when passed an object containing an array, deepcopy should return a deep copy of the object", () => {
        let testArr = [1, 2, 3]
        let testObj = {test: testArr};

        expect(deepcopy(testObj).test === testArr).toBe(false);
    });

    it("when passed an object containing another object, deepcopy should return a deep copy of the object.", () => {
        let nestedTestObj = { a: 1 };
        let testObj = {test: nestedTestObj};

        expect(deepcopy(testObj).test === nestedTestObj).toBe(false);
    });
});
