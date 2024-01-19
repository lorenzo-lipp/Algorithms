let { eth_mult } = require("./ethiopian-multiplication");

describe("Testing eth_mult", () => {
    it("should be a function", () => {
        expect(typeof eth_mult).toBe("function");
    });

    it("should return 578 to the multiplication of 17 by 34", () => {
        expect(eth_mult(17, 34)).toBe(578);
    });

    it("should return 578 to the multiplication of 34 by 17", () => {
        expect(eth_mult(34, 17)).toBe(578);
    });

    it("should return 1058 to the multiplication of 23 by 46", () => {
        expect(eth_mult(23, 46)).toBe(1058);
    });

    it("should return 324 to the multiplication of 12 by 27", () => {
        expect(eth_mult(12, 27)).toBe(324);
    });

    it("should return 5488 to the multiplication of 56 by 98", () => {
        expect(eth_mult(56, 98)).toBe(5488);
    });

    it("should return 4662 to the multiplication of 63 by 74", () => {
        expect(eth_mult(63, 74)).toBe(4662);
    });
});