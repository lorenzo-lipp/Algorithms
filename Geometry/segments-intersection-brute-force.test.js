const { getIntersections } = require("./segments-intersection-brute-force");

describe("Testing: Segments Intersection - Brute Force", () => {
    let segments = [
        [[7.07818, 0.44636], [7.95818, 1.52636]],
        [[8.51818, -0.51364], [10.77818, 1.00636]],
        [[10.77818, 1.00636], [15.39818, -4.69364]],
        [[12.93625, 1.07481], [16, -2]],
        [[15.82818, 1.54636], [8.63818, -2.93364]],
        [[15.82818, 1.54636], [13.37818, -3.05364]],
        [[5.05491, -0.78577], [5.05491, -3.2108]],
        [[2.96437, -3.33623], [18.37166, 0.21769]],
        [[13.67818, -0.37364], [12, -2]],
        [[10.25818, -1.09364], [9.80998, -3.49358]]
    ];
    let result = getIntersections(segments);

    it("should return an array", () => {
        expect(Array.isArray(result)).toBe(true);
    });

    it("should have exactly 15 intersections", () => {
        expect(result.length).toBe(15);
    });

    it("should have no intersections with segment 0", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[0])
        )).toBeUndefined();
    });

    it("should have a intersection between segment 1 and segment 2", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[1]) && intersection[2].includes(segments[2])
        )).toBeDefined();
    });
    
    it("should have a intersection between segment 2 and segment 4", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[2]) && intersection[2].includes(segments[4])
        )).toBeDefined();
    });

    it("should have a intersection between segment 2 and segment 5", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[2]) && intersection[2].includes(segments[5])
        )).toBeDefined();
    });

    it("should have a intersection between segment 2 and segment 7", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[2]) && intersection[2].includes(segments[7])
        )).toBeDefined();
    });

    it("should have a intersection between segment 2 and segment 8", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[2]) && intersection[2].includes(segments[8])
        )).toBeDefined();
    });

    it("should have a intersection between segment 3 and segment 4", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[3]) && intersection[2].includes(segments[4])
        )).toBeDefined();
    });

    it("should have a intersection between segment 3 and segment 5", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[3]) && intersection[2].includes(segments[5])
        )).toBeDefined();
    });

    it("should have a intersection between segment 3 and segment 7", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[3]) && intersection[2].includes(segments[7])
        )).toBeDefined();
    });

    it("should have a intersection between segment 4 and segment 5", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[4]) && intersection[2].includes(segments[5])
        )).toBeDefined();
    });

    it("should have a intersection between segment 4 and segment 7", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[4]) && intersection[2].includes(segments[7])
        )).toBeDefined();
    });

    it("should have a intersection between segment 4 and segment 9", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[4]) && intersection[2].includes(segments[9])
        )).toBeDefined();
    });

    it("should have a intersection between segment 5 and segment 7", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[5]) && intersection[2].includes(segments[7])
        )).toBeDefined();
    });

    it("should have a intersection between segment 6 and segment 7", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[6]) && intersection[2].includes(segments[7])
        )).toBeDefined();
    });

    it("should have a intersection between segment 7 and segment 8", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[7]) && intersection[2].includes(segments[8])
        )).toBeDefined();
    });

    it("should have a intersection between segment 7 and segment 9", () => {
        expect(result.find(intersection => 
            intersection[2].includes(segments[7]) && intersection[2].includes(segments[9])
        )).toBeDefined();
    });

    it("should return the same number of intersections independent of segment points' order", () => {
        function swapPoints(p) { [p[0], p[1]] = [p[1], p[0]]; }

        for (let i = 0; i < 30; i++) {
            for (let segment of segments) {
                if (Math.random() > 0.5) swapPoints(segment);
            }

            let newResult = getIntersections(segments);

            expect(newResult.length).toBe(result.length);
        }
    });
});