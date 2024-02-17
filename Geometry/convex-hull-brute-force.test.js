const { getConvexHull } = require("./convex-hull-brute-force");

describe("Testing: Convex Hull - Brute Force", () => {
    let points1 = [
        { x: -1.48, y: 2.88 },
        { x: 5, y: 3 },
        { x: 0.1, y: 0.78 },
        { x: 4.68, y: 0.1 },
        { x: -1.72, y: -0.54 },
        { x: 2.96, y: -1.52 }
    ];
    let polygonChain1 = getConvexHull([...points1]);

    it("should return an array", () => {
        expect(Array.isArray(polygonChain1)).toBe(true);
    });

    it("should return a polygon chain that doesn't contains point { x: 0.1, y: 0.78 }", () => {
        for (let point of polygonChain1) {
            expect(JSON.stringify(point)).not.toBe(JSON.stringify(points1[2]));
        }
    });

    it("should return the correct polygon chain, sorted by polar coordinates with lower then leftmost point (points 1)", () => {
        let expectedChain = [points1[5], points1[3], points1[1], points1[0], points1[4]];

        expect(JSON.stringify(polygonChain1)).toBe(JSON.stringify(expectedChain));
    });

    let points2 = [
        { x: 8.08, y: -0.55 },
        { x: 8.96, y: 0.53 },
        { x: 11.26, y: -2.09 },
        { x: 8.32, y: -2.37 },
        { x: 11.78, y: 0.01 },
        { x: 9.64, y: -3.93 },
        { x: 9.52, y: -1.51 },
        { x: 14.68, y: -1.37 },
        { x: 14.38, y: -4.05 },
        { x: 16.4, y: -5.69 },
        { x: 16.84, y: 0.55 },
        { x: 13, y: -3 },
        { x: 17.37, y: -3.2 },
        { x: 20.3, y: -2.22 },
        { x: 20.22, y: 1.51 },
        { x: 14.15, y: 2.46 },
        { x: 19.51, y: -5.51 },
        { x: 12.63, y: -6.38 },
        { x: 10, y: -5 },
        { x: 5.97, y: -2.8 },
        { x: 6.93, y: -5.38 },
        { x: 11.33, y: 2.98 },
    ];
    let polygonChain2 = getConvexHull([...points2]);

    it("should return the correct polygon chain, sorted by polar coordinates with lower then leftmost point (points 2)", () => {
        let expectedChain = [points2[17], points2[16], points2[13], points2[14], points2[21], points2[1], points2[19], points2[20]];

        expect(JSON.stringify(polygonChain2)).toBe(JSON.stringify(expectedChain));
    });
})