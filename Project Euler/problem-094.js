/* 
Problem 94: Almost equilateral triangles

It is easily proved that no equilateral triangle exists with integral length sides and integral area. However, the almost equilateral triangle 5-5-6 has an area of 12 square units.
We shall define an almost equilateral triangle to be a triangle for which two sides are equal and the third differs by no more than one unit.
Find the sum of the perimeters of all almost equilateral triangles with integral side lengths and area and whose perimeters do not exceed limit.
*/

function almostEquilateralTriangles(limit) {
    let acc = 0;
    let sequence = [5, 65, 901];

    // https://www.had2know.org/academics/nearly-equilateral-heronian-triangles.html
    while (sequence[sequence.length - 1] * 3 + 1 <= limit) {
        let size = sequence.length;
        let nextSide = 15 * sequence[size - 1] - 15 * sequence[size - 2] + sequence[size - 3];
        sequence.push(nextSide);
    }

    for (let side of sequence) {
        let perimeter = side * 3 + 1
        if (perimeter <= limit) {
            acc += perimeter;
        } 
    }

    sequence = [16, 240, 3360];

    while (sequence[sequence.length - 1] * 3 + 2 <= limit) {
        let size = sequence.length;
        let nextSide = 15 * sequence[size - 1] - 15 * sequence[size - 2] + sequence[size - 3];
        sequence.push(nextSide);
    }

    for (let side of sequence) {
        let perimeter = side * 3 + 2;
        if (perimeter <= limit) {
            acc += perimeter;
        } 
    }

    return acc;
}

module.exports = { almostEquilateralTriangles };