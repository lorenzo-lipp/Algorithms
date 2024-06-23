const { UnionFind } = require("./union-find");

class Point {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

describe("Testing Union Find", () => {
    it("should have a method named add", () => {
        let unionFind = new UnionFind();

        expect(typeof unionFind.add).toBe("function");
    });

    it("should have a method named find", () => {
        let unionFind = new UnionFind();

        expect(typeof unionFind.find).toBe("function");
    });

    it("should have a method named union", () => {
        let unionFind = new UnionFind();

        expect(typeof unionFind.union).toBe("function");
    });

    it("should have a method named size", () => {
        let unionFind = new UnionFind();

        expect(typeof unionFind.size).toBe("function");
    });

    it("should be able to add an item", () => {
        let unionFind = new UnionFind();
        let point = new Point("Origin", 0, 0);

        expect(unionFind.size()).toBe(0);
        unionFind.add(point);
        expect(unionFind.size()).toBe(1);
    });

    it("should be able to receive a item list as a constructor parameter", () => {
        let pointA = new Point("A", 0, 0);
        let pointB = new Point("B", 0, 0);
        let unionFind = new UnionFind([pointA, pointB]);

        expect(unionFind.size()).toBe(2);
    });

    it("should be able to find an item", () => {
        let unionFind = new UnionFind();
        let point = new Point("Origin", 0, 0);

        unionFind.add(point);

        let group = unionFind.find(point);

        expect(group).not.toBeUndefined();
    });

    it("should throw an error when using find on a item that was not added", () => {
        let unionFind = new UnionFind();
        let point = new Point("Origin", 0, 0);

        expect(() => unionFind.find(point)).toThrow();
    });

    it("should be able to union two different groups", () => {
        let pointA = new Point("A", 0, 0);
        let pointB = new Point("B", 0, 0);
        let unionFind = new UnionFind([pointA, pointB]);

        let groupA = unionFind.find(pointA);
        let groupB = unionFind.find(pointB);

        expect(groupA === groupB).toBeFalsy();

        unionFind.union(pointA, pointB);

        groupA = unionFind.find(pointA);
        groupB = unionFind.find(pointB);

        expect(groupA === groupB).toBeTruthy();
    });

    it("should return true when union is successful", () => {
        let pointA = new Point("A", 0, 0);
        let pointB = new Point("B", 0, 0);
        let unionFind = new UnionFind([pointA, pointB]);

        expect(unionFind.union(pointA, pointB)).toBeTruthy();
    });

    it("should return false when union is not successful", () => {
        let pointA = new Point("A", 0, 0);
        let pointB = new Point("B", 0, 0);
        let unionFind = new UnionFind([pointA, pointB]);

        unionFind.union(pointA, pointB);
        expect(unionFind.union(pointA, pointB)).toBeFalsy();
    });

    it("should correctly union a set of points", () => {
        const E = new Point("E", 0, 0);
        const F = new Point("F", 0, 0);
        const I = new Point("I", 0, 0);
        const D = new Point("D", 0, 0);
        const C = new Point("C", 0, 0);
        const A = new Point("A", 0, 0);
        const J = new Point("J", 0, 0);
        const L = new Point("L", 0, 0);
        const G = new Point("G", 0, 0);
        const K = new Point("K", 0, 0);
        const B = new Point("B", 0, 0);
        const H = new Point("H", 0, 0);
        let points = [E, F, I, D, C, A, J, L, G, K, B, H];
    
        let unionFind = new UnionFind(points);

        // Union C and K (Group = C, K)
        expect(unionFind.find(C) === unionFind.find(K)).toBeFalsy();
        unionFind.union(C, K);
        expect(unionFind.find(C)).not.toBeUndefined();
        for (let point of [K]) {
            expect(unionFind.find(C) === unionFind.find(point)).toBeTruthy();
        }

        // Union F and E (Group = F, E)
        expect(unionFind.find(F) === unionFind.find(E)).toBeFalsy();
        unionFind.union(F, E);
        expect(unionFind.find(F)).not.toBeUndefined();
        for (let point of [E]) {
            expect(unionFind.find(F) === unionFind.find(point)).toBeTruthy();
        }

        // Union A and J (Group = A, J)
        expect(unionFind.find(A) === unionFind.find(J)).toBeFalsy();
        unionFind.union(A, J);
        expect(unionFind.find(A)).not.toBeUndefined();
        for (let point of [J]) {
            expect(unionFind.find(A) === unionFind.find(point)).toBeTruthy();
        }

        // Union A and B (Group = A, B, J)
        expect(unionFind.find(A) === unionFind.find(B)).toBeFalsy();
        unionFind.union(A, B);
        expect(unionFind.find(A)).not.toBeUndefined();
        for (let point of [J, B]) {
            expect(unionFind.find(A) === unionFind.find(point)).toBeTruthy();
        }

        // Union C and D (Group = C, K, D)
        expect(unionFind.find(C) === unionFind.find(D)).toBeFalsy();
        unionFind.union(C, D);
        expect(unionFind.find(C)).not.toBeUndefined();
        for (let point of [D, K]) {
            expect(unionFind.find(C) === unionFind.find(point)).toBeTruthy();
        }

        // Union D and I (Group = C, K, D, I)
        expect(unionFind.find(D) === unionFind.find(I)).toBeFalsy();
        unionFind.union(D, I);
        expect(unionFind.find(D)).not.toBeUndefined();
        for (let point of [K, D, I]) {
            expect(unionFind.find(C) === unionFind.find(point)).toBeTruthy();
        }

        // Union L and F (Group = L, F, E)
        expect(unionFind.find(L) === unionFind.find(F)).toBeFalsy();
        unionFind.union(L, F);
        expect(unionFind.find(L)).not.toBeUndefined();
        for (let point of [F, E]) {
            expect(unionFind.find(L) === unionFind.find(point)).toBeTruthy();
        }

        // Union C and A (Group = C, K, D, I, A, B, J)
        expect(unionFind.find(C) === unionFind.find(A)).toBeFalsy();
        unionFind.union(C, A);
        expect(unionFind.find(C)).not.toBeUndefined();
        for (let point of [K, D, I, A, B, J]) {
            expect(unionFind.find(C) === unionFind.find(point)).toBeTruthy();
        }

        // Union A and B (Group = C, K, D, I, A, B, J)
        expect(unionFind.find(A) === unionFind.find(B)).toBeTruthy();
        unionFind.union(A, B);
        expect(unionFind.find(C)).not.toBeUndefined();
        for (let point of [K, D, I, A, B, J]) {
            expect(unionFind.find(C) === unionFind.find(point)).toBeTruthy();
        }

        // Union H and G (Group = H, G)
        expect(unionFind.find(H) === unionFind.find(G)).toBeFalsy();
        unionFind.union(H, G);
        expect(unionFind.find(H)).not.toBeUndefined();
        for (let point of [G]) {
            expect(unionFind.find(H) === unionFind.find(point)).toBeTruthy();
        }

        // Union H and F (Group = H, G, L, F, E)
        expect(unionFind.find(H) === unionFind.find(F)).toBeFalsy();
        unionFind.union(H, F);
        expect(unionFind.find(H)).not.toBeUndefined();
        for (let point of [G, L, F, E]) {
            expect(unionFind.find(H) === unionFind.find(point)).toBeTruthy();
        }

        // Union H and B (Group = A, B, C, D, E, F, G, H, I, J, K, L)
        expect(unionFind.find(H) === unionFind.find(B)).toBeFalsy();
        unionFind.union(H, B);
        expect(unionFind.find(H)).not.toBeUndefined();
        for (let point of [B, C, D, E, F, G, H, I, J, K, L]) {
            expect(unionFind.find(A) === unionFind.find(point)).toBeTruthy();
        }
    });
})