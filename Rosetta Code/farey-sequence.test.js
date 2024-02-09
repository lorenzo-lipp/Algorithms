let { farey } = require("./farey-sequence");

describe("Testing farey", () => {
    it("should be a function", () => {
        expect(typeof farey).toBe("function");
    });

    it("should return an array", () => {
        expect(Array.isArray(farey(3))).toBe(true);
    });

    it("should return ['0/1','1/3','1/2','2/3','1/1'] when input 3", () => {
        expect(farey(3)).toStrictEqual(['0/1','1/3','1/2','2/3','1/1']);
    });

    it("should return ['0/1','1/4','1/3','1/2','2/3','3/4','1/1'] when input 4", () => {
        expect(farey(4)).toStrictEqual(['0/1','1/4','1/3','1/2','2/3','3/4','1/1']);
    });

    it("should return ['0/1','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','1/1'] when input 5", () => {
        expect(farey(5)).toStrictEqual(['0/1','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','1/1']);
    });
});