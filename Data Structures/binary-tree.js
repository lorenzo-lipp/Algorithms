class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let node = { value, left: null, right: null };
        if (!this.root) return this.root = node;

        let position = this.root;

        while (position) {
            if (value < position.value) {
                if (position.left !== null) position = position.left;
                else return position.left = node;
            } else if (value > position.value) {
                if (position.right !== null) position = position.right;
                else return position.right = node;
            } else return;
        }
    }

    remove(value) {
        this.#remove(value, this.root);
    }

    #remove(value, root, parentNode = null) {
        let position = root;
        let nodeToRemove = null;

        while (position && nodeToRemove === null) {
            if (value < position.value) {
                parentNode = position;
                position = position.left;
            } else if (value > position.value) {
                parentNode = position;
                position = position.right;
            } else nodeToRemove = position;
        }

        if (!nodeToRemove) return;
        if (nodeToRemove.left && nodeToRemove.right) {
            let substituteNode = this.#getSubtreeSmallerValue(nodeToRemove.right);
            this.#remove(substituteNode.value, substituteNode, nodeToRemove);
            nodeToRemove.value = substituteNode.value;
        }
        else if (nodeToRemove.left) {
            nodeToRemove.value = nodeToRemove.left.value;
            nodeToRemove.right = nodeToRemove.left.right;
            nodeToRemove.left = nodeToRemove.left.left;
        } else if (nodeToRemove.right) {
            nodeToRemove.value = nodeToRemove.right.value;
            nodeToRemove.left = nodeToRemove.right.left;
            nodeToRemove.right = nodeToRemove.right.right; 
        } else {
            if (parentNode && parentNode.left === nodeToRemove) parentNode.left = null;
            else if (parentNode && parentNode.right === nodeToRemove) parentNode.right = null;
            else this.root = null;
        }
    }

    #getSubtreeSmallerValue(root) {
        let smaller = root;
        while(smaller.left) smaller = smaller.left;
        return smaller;
    }

    printInorder() {
        this.#inorderRecursion(this.root, console.log);
    }

    toArr() {
        let arr = [];
        this.#inorderRecursion(this.root, (val) => arr.push(val));
        return arr;
    }

    #inorderRecursion(node, callback) {
        if (node === null) return;
        this.#inorderRecursion(node.left, callback);
        callback(node.value);
        this.#inorderRecursion(node.right, callback);
    }
}

module.exports = { BinaryTree };