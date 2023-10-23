let { Num } = require("./define-a-primitive-data-type");

describe("Testing primitive data type problem", () => {
    it("should be a function", () => {
        expect(typeof Num).toBe('function');
    });

    it("new Num(4) should return an object", () => {
        expect(typeof new Num(4)).toBe('object');
    });

    it("new Num('test') should throw a TypeError with message 'Not a Number'", () => {
        expect(() => new Num('test')).toThrow(TypeError);
        expect(() => new Num('test')).toThrow("Not a Number");
    });

    it("new Num(0) should throw a TypeError with message 'Out of range'", () => {
        expect(() => new Num(0)).toThrow(TypeError);
        expect(() => new Num(0)).toThrow("Out of range");
    });

    it("new Num(-5) should throw a TypeError with message 'Out of range'", () => {
        expect(() => new Num(-5)).toThrow(TypeError);
        expect(() => new Num(-5)).toThrow("Out of range");
    });

    it("new Num(10) should not throw a TypeError", () => {
        expect(() => new Num(10)).not.toThrow(TypeError);
    });

    it("new Num(20) should throw a TypeError with message 'Out of range'", () => {
        expect(() => new Num(20)).toThrow(TypeError);
        expect(() => new Num(20)).toThrow("Out of range");
    });

    it("new Num(3) + new Num(4) should equal 7", () => {
        expect(new Num(3) + new Num(4)).toBe(7);
    });

    it("new Num(3) - new Num(4) should equal -1", () => {
        expect(new Num(3) - new Num(4)).toBe(-1);
    });

    it("new Num(3) * new Num(4) should equal 12", () => {
        expect(new Num(3) * new Num(4)).toBe(12);
    });

    it("new Num(3) / new Num(4) should equal 0.75", () => {
        expect(new Num(3) / new Num(4)).toBe(0.75);
    });

    it("new Num(3) < new Num(4) should equal true", () => {
        expect(new Num(3) < new Num(4)).toBe(true);
    });
    
    it("new Num(3) > new Num(4) should equal false", () => {
        expect(new Num(3) > new Num(4)).toBe(false);
    });

    it("new Num(5)).toString() should return '5'", () => {
        expect(new Num(5).toString()).toBe("5");
    });
});