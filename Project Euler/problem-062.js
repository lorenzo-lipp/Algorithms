/* 
Problem 62: Cubic permutations

The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). 
In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.
Find the smallest cube for which exactly n permutations of its digits are cube.
*/

function cubicPermutations(n) {
    let lastNum = 1;

    for (let digits = 2; true; digits++) {
        let cubes = [];

        for (let num = lastNum; true; num++) {
            let cubeStr = String(num ** 3);

            if (cubeStr.length === digits) {
                cubes.push(cubeStr);
            } else if (cubeStr.length > digits) {
                lastNum = num;
                break;
            }
        }

        for (let i = 0; i < cubes.length; i++) {
            let permutations = 1;

            for (let j = i + 1; j < cubes.length; j++) {
                if (isPermutationOf(cubes[i], cubes[j])) {
                    permutations++;
                }
            }

            if (permutations === n) return +cubes[i];
        }
    }
}

function isPermutationOf(a, b) {
    let arr = Array(10).fill(0);

    for (let digit of a) {
        arr[digit]++;
    }

    for (let digit of b) {
        arr[digit]--;
    }

    return arr.every((v) => v === 0);
}

module.exports = { cubicPermutations };