/* 
Problem 91: Right triangles with integer coordinates

The points P(x1,y1) and Q(x2,y2) are plotted at integer coordinates and are joined to the origin, O(0,0), to form ΔOPQ.
[https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-1.png]
There are exactly fourteen triangles containing a right angle that can be formed when each coordinate lies between 0 and 2 inclusive; that is, 0≤x1,y1,x2,y2≤2.
[https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-2.png]
Given that 0≤x1,y1,x2,y2≤limit, how many right triangles can be formed?
*/

function rightTrianglesIntCoords(limit) {
    let acc = 0;

    for (let ax = 0; ax <= limit; ax++) {
        for (let ay = 0; ay <= limit; ay++) {
            for (let bx = 0; bx <= limit; bx++) {
                for (let by = 0; by <= limit; by++) {
                    if (isRightTriangle(ax, ay, bx, by)) acc++;
                }
            }
        }
    }

    return acc / 2;
}

function isRightTriangle(ax, ay, bx, by) {
    let d1 = getDistanceSquared(ax, ay, 0, 0);
    let d2 = getDistanceSquared(bx, by, 0, 0);
    let d3 = getDistanceSquared(ax, ay, bx, by);

    if (d3 > d2 && d3 > d1) {
        return d3 === d1 + d2;
    } else if (d2 > d3 && d2 > d1) {
        return d2 === d3 + d1;
    } else if (d1 > d3 && d1 > d2) {
        return d1 === d3 + d2;
    } else {
        return false;
    }
}

function getDistanceSquared(ax, ay, bx, by) {
    return (ax - bx) ** 2 + (ay - by) ** 2;
}

module.exports = { rightTrianglesIntCoords };