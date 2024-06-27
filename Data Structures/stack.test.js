const { Stack } = require("./stack");

describe("Testing Stack", () => {
    it("should have a method named push", () => {
        let stack = new Stack();

        expect(typeof stack.push).toBe("function");
    });

    it("should have a method named pop", () => {
        let stack = new Stack();

        expect(typeof stack.pop).toBe("function");
    });

    it("should have a method named peek", () => {
        let stack = new Stack();

        expect(typeof stack.peek).toBe("function");
    });

    it("should have a method named size", () => {
        let stack = new Stack();

        expect(typeof stack.size).toBe("function");
    });

    it("should have a method named isEmpty", () => {
        let stack = new Stack();

        expect(typeof stack.isEmpty).toBe("function");
    });

    it("push should add a value to the stack", () => {
        let stack = new Stack();

        stack.push(6);

        expect(stack.peek()).toBe(6);
    });

    it("peek should return the last value added to the stack", () => {
        let stack = new Stack();

        stack.push(6);
        stack.push(7);
        stack.push(1);

        expect(stack.peek()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    it("pop should return the last value added to the stack and remove it from the stack", () => {
        let stack = new Stack();

        stack.push(6);
        stack.push(7);
        stack.push(1);

        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(7);
        expect(stack.pop()).toBe(6);
    });

    it("size should return the stack size", () => {
        let stack = new Stack();

        stack.push(6);
        stack.push(7);
        stack.push(1);
        
        expect(stack.size()).toBe(3);
    });

    it("isEmpty should return true only if the stack is empty", () => {
        let stack = new Stack();

        stack.push(6);
        stack.push(7);
        stack.push(1);
        
        expect(stack.isEmpty()).toBe(false);
        
        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.isEmpty()).toBe(true);
    });
})