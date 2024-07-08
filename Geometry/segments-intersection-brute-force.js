/**
 * Computes all intersections of an array of segments, returns empty array if no intersection is found.
 * @param {Array} segments 
 * @returns {Array}
*/
function getIntersections(segments) {
    let intersections = [];

    for (let si_1 = 0; si_1 < segments.length; si_1++) {
        for (let si_2 = si_1 + 1; si_2 < segments.length; si_2++) {
            let intersectionPoint = intersection(segments[si_1], segments[si_2]);

            if (intersectionPoint) intersections.push(intersectionPoint);
        }
    }

    return intersections;
}

/**
 * Computes the intersection of two segments, returns null if no intersection is found.
 * @param {Array} s1 
 * @param {Array} s2 
 * @returns {Array}
*/
function intersection(s1, s2) {
    let q = higherThenLeftmost(s1[0], s1[1]) ? s1[0] : s1[1];
    let q_2 = higherThenLeftmost(s1[0], s1[1]) ? s1[1] : s1[0];
    let p = higherThenLeftmost(s2[0], s2[1]) ? s2[0] : s2[1];
    let p_2 = higherThenLeftmost(s2[0], s2[1]) ? s2[1] : s2[0];
    let diff = { x: q[0] - p[0], y: q[1] - p[1] };
    let s = { x: q_2[0] - q[0], y: q_2[1] - q[1] };
    let r = { x: p_2[0] - p[0], y: p_2[1] - p[1] };
    let rs = crossProduct(r, s);
    let t = crossProduct(diff, s) / rs;
    let u = crossProduct(diff, r) / rs;

    if (u >= 0 && u <= 1 && t >= 0 && t <= 1) {
        return [
            q[0] + s.x * u, 
            q[1] + s.y * u,
            [s1, s2]
        ];
    }

    return null;
}

/**
 * Returns true if p1 is higher than p2 or they have the same height but p1 is leftmost.
 * @param {Array<Number>} p1 
 * @param {Array<Number>} p2 
 * @returns {Boolean}
*/
function higherThenLeftmost(p1, p2) {
    return p1[1] > p2[1] || (p1[1] === p2[1] && p1[0] < p2[0]);
}

/**
 * Returns the cross product of two points.
 * @param {Array.<Number>} p1 
 * @param {Array.<Number>} p2 
 * @returns {Number}
*/
function crossProduct(p1, p2) { 
    return p1.x * p2.y - p2.x * p1.y; 
}

module.exports = { getIntersections };