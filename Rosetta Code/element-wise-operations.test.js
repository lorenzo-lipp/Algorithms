let { operation } = require("./element-wise-operations");

describe("Testing operation", () => {
    it("should be a function", () => {
        expect(typeof operation).toBe("function");
    });

    it("should return the right result for matrix addition", () => {
        expect(operation("m_add", [[1,2],[3,4]], [[1,2],[3,4]])).toStrictEqual([[2,4],[6,8]]);
    });

    it("should return the right result for scalar addition", () => {
        expect(operation("s_add", [[1,2],[3,4]], 2)).toStrictEqual([[3,4],[5,6]]);
    });

    it("should return the right result for matrix subtraction", () => {
        expect(operation("m_sub", [[1,2],[3,4]], [[1,2],[3,4]])).toStrictEqual([[0,0],[0,0]]);
    });

    it("should return the right result for scalar subtraction", () => {
        expect(operation("s_sub", [[1,2],[3,4]], 2)).toStrictEqual([[-1,0],[1,2]]);
    });

    it("should return the right result for matrix multiplication", () => {
        expect(operation("m_mult", [[1,2],[3,4]], [[1,2],[3,4]])).toStrictEqual([[1,4],[9,16]]);
    });

    it("should return the right result for scalar multiplication", () => {
        expect(operation("s_mult", [[1,2],[3,4]], 2)).toStrictEqual([[2,4],[6,8]]);
    });

    it("should return the right result for matrix division", () => {
        expect(operation("m_div", [[1,2],[3,4]], [[1,2],[3,4]])).toStrictEqual([[1,1],[1,1]]);
    });

    it("should return the right result for scalar division", () => {
        expect(operation("s_div", [[1,2],[3,4]], 2)).toStrictEqual([[0.5,1],[1.5,2]]);
    });

    it("should return the right result for matrix exponential", () => {
        expect(operation("m_exp", [[1,2],[3,4]], [[1,2],[3,4]])).toStrictEqual([[1,4],[27,256]]);
    });

    it("should return the right result for scalar exponential", () => {
        expect(operation("s_exp", [[1,2],[3,4]], 2)).toStrictEqual([[1,4],[9,16]]);
    });
});