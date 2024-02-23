function getConvexHull(points) {
    let extremePoints = new Set(points);

    for (let p1 = 0; p1 < points.length; p1++) {
        for (let p2 = p1 + 1; p2 < points.length; p2++) {
            for (let p3 = p2 + 1; p3 < points.length; p3++) {
                for (let p4 = 0; p4 < points.length; p4++) {
                    if (p4 === p1 || p4 === p2 || p4 === p3 || !extremePoints.has(points[p4])) continue;
                    
                    let a = toLeft(points[p1], points[p2], points[p4]);
                    let b = toLeft(points[p2], points[p3], points[p4]);
                    if (a !== b) continue;
                    let c = toLeft(points[p3], points[p1], points[p4]);
                    if (a !== c) continue;
                    
                    extremePoints.delete(points[p4]);
                }
            }
        }
    }

    extremePoints = [...extremePoints];
    let p0 = extremePoints.reduce((a, b) => a.y < b.y || (a.y === b.y && a.x < b.x) ? a : b);
    extremePoints.sort((a, b) => a == p0 ? -1 : polarAngle(p0, a) - polarAngle(p0, b));

    return extremePoints;
}

function polarAngle(p1, p2) { return (360 + Math.atan((p2.y - p1.y) / (p2.x - p1.x)) * 360 / (2 * Math.PI)) % 360; }
function toLeft(p1, p2, p3) { return determinant(p1, p2, p3) > 0; }
function determinant(p1, p2, p3) { return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; }

module.exports = { getConvexHull };