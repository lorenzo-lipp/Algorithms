/* 
Problem 90: Cube digit pairs

Each of the six faces on a cube has a different digit (0 to 9) written on it; the same is done to a second cube. 
By placing the two cubes side-by-side in different positions we can form a variety of 2-digit numbers.
For example, the square number 64 could be formed:
[https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png]
In fact, by carefully choosing the digits on both cubes it is possible to display all of the square numbers below one-hundred: 01, 04, 09, 16, 25, 36, 49, 64, and 81.
For example, one way this can be achieved is by placing {0, 5, 6, 7, 8, 9} on one cube and {1, 2, 3, 4, 8, 9} on the other cube.
However, for this problem we shall allow the 6 or 9 to be turned upside-down so that an arrangement like 
{0, 5, 6, 7, 8, 9} and {1, 2, 3, 4, 6, 7} allows for all nine square numbers to be displayed; otherwise it would be impossible to obtain 09.
In determining a distinct arrangement we are interested in the digits on each cube, not the order.
{1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}
{1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
But because we are allowing 6 and 9 to be reversed, the two distinct sets in the last example both represent the extended set {1, 2, 3, 4, 5, 6, 9} for the purpose of forming 2-digit numbers.
How many distinct arrangements of the two cubes allow for all of the square numbers to be displayed?
*/

function cubeDigitPairs() {
    let arrangements = getDiceArrangements();
    let acc = 0;

    for (let i = 0; i < arrangements.length; i++) {
        for (let j = i + 1; j < arrangements.length; j++) {
            if (isCombinationValid(arrangements[i], arrangements[j])) {
                acc++;
            }
        }
    }

    return acc;
}

function isCombinationValid(c1, c2) {
    let c1Digits = Array(10).fill(false);
    let c2Digits = Array(10).fill(false);

    for (let digit of c1) c1Digits[digit] = true;
    for (let digit of c2) c2Digits[digit] = true;

    c1Digits[9] = c1Digits[6] = c1Digits[6] || c1Digits[9];
    c2Digits[9] = c2Digits[6] = c2Digits[6] || c2Digits[9];

    return ((c1Digits[0] && c2Digits[1]) || (c1Digits[1] && c2Digits[0])) && // Test for 01
           ((c1Digits[0] && c2Digits[4]) || (c1Digits[4] && c2Digits[0])) && // Test for 04
           ((c1Digits[0] && c2Digits[9]) || (c1Digits[9] && c2Digits[0])) && // Test for 09
           ((c1Digits[1] && c2Digits[6]) || (c1Digits[6] && c2Digits[1])) && // Test for 16
           ((c1Digits[2] && c2Digits[5]) || (c1Digits[5] && c2Digits[2])) && // Test for 25
           ((c1Digits[3] && c2Digits[6]) || (c1Digits[6] && c2Digits[3])) && // Test for 36
           ((c1Digits[4] && c2Digits[9]) || (c1Digits[9] && c2Digits[4])) && // Test for 49
           ((c1Digits[6] && c2Digits[4]) || (c1Digits[4] && c2Digits[6])) && // Test for 64
           ((c1Digits[8] && c2Digits[1]) || (c1Digits[1] && c2Digits[8]));   // Test for 81
}

function getDiceArrangements() {
    let arr = [];
    let digits = Array(10).fill().map((_, i) => String(i));

    for (let s1 = 0; s1 < 10; s1++) {
        for (let s2 = s1 + 1; s2 < 10; s2++) {
            for (let s3 = s2 + 1; s3 < 10; s3++) {
                for (let s4 = s3 + 1; s4 < 10; s4++) {
                    for (let s5 = s4 + 1; s5 < 10; s5++) {
                        for (let s6 = s5 + 1; s6 < 10; s6++) {
                            arr.push(digits[s1] + digits[s2] + digits[s3] + digits[s4] + digits[s5] + digits[s6]);
                        }
                    }
                }
            }
        }
    }

    return arr;
}

module.exports = { cubeDigitPairs };