/* 
Problem 86: Cuboid route

A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and a fly, F, sits in the opposite corner. 
By travelling on the surfaces of the room the shortest "straight line" distance from S to F is 10 and the path is shown on the diagram.
[https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png]
However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't always have integer length.
It can be shown that there are exactly 2060 distinct cuboids, ignoring rotations, with integer dimensions, up to a maximum size of M by M by M, for which the shortest route has integer length when M = 100. 
This is the least value of M for which the number of solutions first exceeds two thousand; the number of solutions when M = 99 is 1975.
Find the least value of M such that the number of solutions first exceeds n.
*/

function cuboidRoute(n) {
    let solutions = 0;
    let perfectSquaresSet = new Set();
    let lastNum = 0;

    for (let m = 1; true; m++) {
        let mSquared = m * m
        let max = 5 * mSquared;

        for (let i = lastNum + 1; true; i++) {
            let square = i * i;

            if (square > max) break;

            perfectSquaresSet.add(square);
            lastNum = i;
        }

        for (let n = 1; n <= m; n++) {
            for (let k = n; k <= m; k++) {
                let result = mSquared + (n + k) ** 2;

                if (perfectSquaresSet.has(result)) {
                    solutions++;
                }
            }
        }

        if (solutions > n) return m;
    }
}

module.exports = { cuboidRoute };