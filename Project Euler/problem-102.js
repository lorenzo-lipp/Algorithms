/* 
Problem 102: Triangle containment

Three distinct points are plotted at random on a Cartesian plane, for which -1000 ≤ x, y ≤ 1000, such that a triangle is formed.
Consider the following two triangles:
const exampleTriangles = [
  [[-340, 495], [-153, -910], [835, -947]],
  [[-175, 41], [-421, -714], [574, -645]]
];
It can be verified that first triangle contains the origin, whereas second triangle does not.
Using the triangles array containing coordinates of triangles, find the number of triangles for which the interior contains the origin.
*/

function triangleContainment(triangles) {
    let acc = 0;

    for (let triangle of triangles) {
        let toLeft = 0;

        toLeft += Math.sign(determinant(triangle[0], triangle[1]));
        toLeft += Math.sign(determinant(triangle[1], triangle[2]));
        toLeft += Math.sign(determinant(triangle[2], triangle[0]));

        if (toLeft === 3 || toLeft === -3) acc++;
    }

    return acc;
}

function determinant([p1x, p1y], [p2x, p2y]) { 
    return p1x * p2y - p1y * p2x; 
}

module.exports = { triangleContainment };