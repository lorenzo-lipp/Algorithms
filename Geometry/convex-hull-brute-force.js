function getConvexHull(points) {
    let extremePoints = new Set();

    for (let p1 = 0; p1 < points.length; p1++) {
        for (let p2 = p1 + 1; p2 < points.length; p2++) {
            let allPointsToLeft = true;
            let allPointsToRight = true;
            
            for (let p3 = 0; p3 < points.length; p3++) {
                if (p3 === p1 || p3 === p2) continue;

                allPointsToLeft = allPointsToLeft && toLeft(points[p1], points[p2], points[p3]);
                allPointsToRight = allPointsToRight && toRight(points[p1], points[p2], points[p3]);
            }

            if (allPointsToLeft || allPointsToRight) {
                extremePoints.add(points[p1]);
                extremePoints.add(points[p2]);
            }
        }
    }

    extremePoints = [...extremePoints];
    let p0 = extremePoints.reduce((a, b) => a.y < b.y || (a.y === b.y && a.x < b.x) ? a : b);
    extremePoints.sort((a, b) => a == p0 ? -1 : polarAngle(p0, a) - polarAngle(p0, b));

    return [...extremePoints];
}

function polarAngle(p1, p2) { return (360 + Math.atan((p2.y - p1.y) / (p2.x - p1.x)) * 360 / (2 * Math.PI)) % 360; }
function determinant(p1, p2, p3) { return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; }
function toLeft(p1, p2, p3) { return determinant(p1, p2, p3) > 0; }
function toRight(p1, p2, p3) { return determinant(p1, p2, p3) < 0; }

module.exports = { getConvexHull };