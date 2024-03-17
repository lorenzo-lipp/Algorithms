let { brain } = require("./execute-brainf");

let bye = "++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.";
let hello = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

describe("Testing brain", () => {
    it("should be a function", () => {
        expect(typeof brain).toBe("function");
    });

    it("should return A when input \"++++++[>++++++++++<-]>+++++.\"", () => {
        expect(brain("++++++[>++++++++++<-]>+++++.")).toBe("A");
    });

    it("should return Goodbye, World!\\r\\n when input bye", () => {
        expect(brain(bye)).toBe("Goodbye, World!\r\n");
    });

    it("should return Hello World!\\n when input hello", () => {
        expect(brain(hello)).toBe("Hello World!\n");
    });
});