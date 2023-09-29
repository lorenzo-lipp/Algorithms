let { isBalanced } = require("./balanced-brackets");

describe("Testing balanced brackets problem", () => {
    it("should be a function", () => {
        expect(typeof isBalanced).toBe("function");
    });

    it("should return true when input \"[]\"", () => {        
        expect(isBalanced("[]")).toBe(true);
    });

    it("should return false when input \"]][[[][][][]][\"", () => {        
        expect(isBalanced("]][[[][][][]][")).toBe(false);
    });

    it("should return true when input \"[][[[[][][[[]]]]]]\"", () => {        
        expect(isBalanced("[][[[[][][[[]]]]]]")).toBe(true);
    });

    it("should return false when input \"][\"", () => {        
        expect(isBalanced("][")).toBe(false);
    });

    it("should return false when input \"[[[]]]][[]\"", () => {        
        expect(isBalanced("[[[]]]][[]")).toBe(false);
    });

    it("should return false when input \"][[]\"", () => {        
        expect(isBalanced("][[]")).toBe(false);
    });

    it("should return false when input \"][[][]][[[]]\"", () => {        
        expect(isBalanced("][[][]][[[]]")).toBe(false);
    });

    it("should return false when input \"[[][]]][\"", () => {        
        expect(isBalanced("[[][]]][")).toBe(false);
    });

    it("should return false when input \"[[[]]][[]]]][][[\"", () => {        
        expect(isBalanced("[[[]]][[]]]][][[")).toBe(false);
    });

    it("should return false when input \"[]][[]]][[[[][]]\"", () => {        
        expect(isBalanced("[]][[]]][[[[][]]")).toBe(false);
    });
});