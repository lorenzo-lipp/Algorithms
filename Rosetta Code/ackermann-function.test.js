let { ack } = require("./ackermann-function");

describe("Testing ack", () => {
    it("should be a function", () => {
        expect(typeof ack).toBe("function");
    });

    it("should return 1 when m = 0 and n = 0", () => {
        expect(ack(0, 0)).toBe(1);
    });

    it("should return 3 when m = 1 and n = 1", () => {
        expect(ack(1, 1)).toBe(3);
    });

    it("should return 13 when m = 2 and n = 5", () => {
        expect(ack(2, 5)).toBe(13);
    });

    it("should return 61 when m = 3 and n = 3", () => {
        expect(ack(3, 3)).toBe(61);
    });
});