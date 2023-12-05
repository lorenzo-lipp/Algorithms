/* 
Problem 85: Counting rectangles
By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:
[https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png]
Although there may not exists a rectangular grid that contains exactly n rectangles, find the area of the grid with the nearest solution.
*/

function countingRectangles(n) {
    let closestArea = null;
    let closestRectangles = null;

    for (let i = 1; closestArea === null || i < closestArea; i++) {
        for (let j = 1; true; j++) {
            let rectangles = countRectangles(i, j);

            if (closestRectangles === null || Math.abs(n - rectangles) < Math.abs(n - closestRectangles)) {
                closestRectangles = rectangles;
                closestArea = i * j;
            } else if (rectangles > closestRectangles) {
                break;
            }
        }
    }

    return closestArea;
}

function countRectangles(x, y) {
    let total = 0;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            total += (y - j) * (x - i)
        }
    }

    return total
}

module.exports = { countingRectangles };