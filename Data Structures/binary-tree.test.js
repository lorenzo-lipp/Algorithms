let { BinaryTree } = require("./binary-tree");

describe("Testing Binary Tree", () => {
    it("should have a method named add, that receives a value as a parameter and add it into the BT", () => {
        let bt = new BinaryTree();

        expect(typeof bt.add).toBe("function");
        bt.add(5);
        expect(bt.root).not.toBeNull();
    });

    it("a BT node should have a left and a right property", () => {
        let bt = new BinaryTree();
    
        bt.add(5);
        expect(bt.root).not.toBeNull();
        expect(bt.root.hasOwnProperty("left")).toBeTruthy();
        expect(bt.root.hasOwnProperty("right")).toBeTruthy();
    });

    it("should have a method named remove, that receives a value as a parameter and remove of the BT", () => {
        let bt = new BinaryTree();

        expect(typeof bt.remove).toBe("function");
        bt.add(5);
        bt.add(7);
        bt.remove(5);
        expect(bt.toArr()).toStrictEqual([7]);
    });

    it("should have a method named toArr, that converts BT to a sorted array", () => {
        let bt = new BinaryTree();

        expect(typeof bt.toArr).toBe("function");
        bt.add(7);
        bt.add(5);
        bt.add(1);
        bt.add(9);
        expect(bt.toArr()).toStrictEqual([1, 5, 7, 9]);
    });

    it("should not add the same value twice", () => {
        let bt = new BinaryTree();

        bt.add(5);
        bt.add(7);
        bt.add(5);
        expect(bt.toArr()).toStrictEqual([5, 7]);
    });

    it("should correctly remove a node", () => {
        let bt = new BinaryTree();

        expect(typeof bt.remove).toBe("function");
        bt.add(5);
        bt.add(7);
        bt.add(6);
        bt.add(8);
        bt.remove(7);
        expect(bt.toArr()).toStrictEqual([5, 6, 8]);
    });
});