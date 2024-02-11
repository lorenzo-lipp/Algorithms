function getConvexHull(points) {
    let stack = [];
    let p0 = points[0];

    for (let i = 1; i < points.length; i++) {
        if (points[i].y < p0.y || (points[i].y === p0.y && points.x < p0.x)) p0 = points[i];
    }

    points.sort((a, b) => a == p0 ? -1 : polarAngle(p0, a) - polarAngle(p0, b));

    for (let point of points) {
        while (stack.length > 1 && 
            determinant(stack[stack.length - 2], stack[stack.length - 1], point) <= 0
        ) stack.pop();

        stack.push(point);
    }

    return stack;
}

function polarAngle(p1, p2) {
    return (360 + Math.atan((p2.y - p1.y) / (p2.x - p1.x)) * 360 / (2 * Math.PI)) % 360;
}

function determinant(p1, p2, p3) { 
    return p1.x * p2.y + p1.y * p3.x + p2.x * p3.y - p1.y * p2.x - p2.y * p3.x - p3.y * p1.x; 
}

module.exports = { getConvexHull };