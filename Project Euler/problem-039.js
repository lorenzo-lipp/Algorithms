/* 
Problem 39: Integer right triangles

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
{20,48,52}, {24,45,51}, {30,40,50}
For which value of p ≤ n, is the number of solutions maximized?
*/

function intRightTriangles(n) {
    let maximized = null;
    let maximizedSolutions = 0;

    for (let p = n; p > 3; p--) {
        let solutions = countSolutions(p);

        if (solutions > maximizedSolutions) {
            maximizedSolutions = solutions;
            maximized = p;
        }
    }

    return maximized;
}

function countSolutions(p) {
    let solutions = 0;

    for (let c = Math.floor(p / 2); c > 0; c--) {
        for (let a = p - c - 1; a > 0; a--) {
            let b = Math.sqrt(c ** 2 - a ** 2);

            if (a + b + c === p) 
                solutions++;
            else if (b > a)
                break;
                
        }
    }

    return solutions;
}

module.exports = { intRightTriangles };