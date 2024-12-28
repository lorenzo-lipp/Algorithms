let { split } = require("./split-character-string-based-on-change-character");

describe("Testing split", () => {
    it("should be a function", () => {
        expect(typeof split).toBe("function");
    });

    it("should return an array", () => {
        expect(Array.isArray(split("hello"))).toBe(true);
    });

    it("should return ['h', 'e', 'll', 'o'] when input 'hello'", () => {
        expect(split("hello")).toStrictEqual(['h', 'e', 'll', 'o']);
    });

    it("should return ['c', 'o', 'mm', 'i', 'ss', 'i', 'o', 'n'] when input 'commission'", () => {
        expect(split("commission")).toStrictEqual(['c', 'o', 'mm', 'i', 'ss', 'i', 'o', 'n']);
    });

    it("should return ['ssss', '----', '====', 'lll', 'oooo'] when input 'ssss----====llloooo'", () => {
        expect(split("ssss----====llloooo")).toStrictEqual(['ssss', '----', '====', 'lll', 'oooo']);
    });

    it("should return ['sss', 'mmm', 'aaa', 'mmm', 'aaa', 't'] when input 'sssmmmaaammmaaat'", () => {
        expect(split("sssmmmaaammmaaat")).toStrictEqual(['sss', 'mmm', 'aaa', 'mmm', 'aaa', 't']);
    });

    it("should return ['g', 'HHH', '5', 'YY', '++', '///', '\\\\'] when input 'gHHH5YY++///\\\\'", () => {
        expect(split("gHHH5YY++///\\\\")).toStrictEqual(['g', 'HHH', '5', 'YY', '++', '///', '\\\\']);
    });
});