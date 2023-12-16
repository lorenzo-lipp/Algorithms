/* 
Problem 93: Arithmetic expressions

By using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, −, *, /) and brackets/parentheses, it is possible to form different positive integer targets.
For example,
8 = (4 * (1 + 3)) / 2
14 = 4 * (3 + 1 / 2)
19 = 4 * (2 + 3) − 1
36 = 3 * 4 * (2 + 1)
Note that concatenations of the digits, like 12 + 34, are not allowed.
Using the set, {1, 2, 3, 4}, it is possible to obtain thirty-one different target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can be obtained before encountering the first non-expressible number.
Find the set of four distinct digits, a < b < c < d, for which the longest set of consecutive positive integers, 1 to n, can be obtained, giving your answer as a string: abcd.
*/

function arithmeticExpressions() {
    let distincSets = getDistincSets();
    let bestMatch = null;
    let biggerLen = 0;

    for (let numSet of distincSets) {
        let targetNumbers = new Set();
        let permutations = [];
        getPermutations([...numSet], 4, permutations);

        for (let permutation of permutations) {
            let newTargetNumbers = getTargetNumbers(permutation);

            for (let newNum of newTargetNumbers) targetNumbers.add(newNum);
        }
    
        let consecutives = countConsecutive(targetNumbers);

        if (consecutives > biggerLen) {
            biggerLen = consecutives;
            bestMatch = numSet[0] * 1000 + numSet[1] * 100 + numSet[2] * 10 + numSet[3];
        }
    }

    return bestMatch;
}

function countConsecutive(targetNumbers) {
    let targetNumbersArr = [...targetNumbers].filter(n => n >= 0 && Number.isInteger(n));
    let maxConsecutive = 0;
    let consecutives = 0;

    targetNumbersArr.sort((a, b) => a - b);

    for (let i = 1; i < targetNumbersArr.length; i++) {
        if (targetNumbersArr[i] - targetNumbersArr[i - 1] === 1) {
            consecutives++;
            maxConsecutive = Math.max(maxConsecutive, consecutives);
        } else {
            consecutives = 0;
        }
    }

    return maxConsecutive;
}

function getTargetNumbers(numSet) {
    let targetNumbers = getTargetNumbersAux(numSet, 1, new Set([numSet[0]]));

    // Cases not provided by getTargetNumbersAux
    targetNumbers.add((numSet[0] + numSet[1]) * (numSet[2] + numSet[3]));
    targetNumbers.add((numSet[0] + numSet[1]) * (numSet[2] - numSet[3]));
    targetNumbers.add((numSet[0] - numSet[1]) * (numSet[2] + numSet[3]));
    targetNumbers.add((numSet[0] - numSet[1]) * (numSet[2] - numSet[3]));
    targetNumbers.add((numSet[0] + numSet[1]) / (numSet[2] + numSet[3]));
    targetNumbers.add((numSet[0] + numSet[1]) / (numSet[2] - numSet[3]));
    targetNumbers.add((numSet[0] - numSet[1]) / (numSet[2] + numSet[3]));
    targetNumbers.add((numSet[0] - numSet[1]) / (numSet[2] - numSet[3]));

    return targetNumbers;
}

function getTargetNumbersAux(numSet, i, partialResults) {
    let nextResults = new Set();

    for (let result of partialResults) {
        nextResults.add(result * numSet[i]);
        nextResults.add(result + numSet[i]);
        nextResults.add(result / numSet[i]);
        nextResults.add(result - numSet[i]);
    }

    if (i === 3) return nextResults;
    else return getTargetNumbersAux(numSet, i + 1, nextResults);
}

function getDistincSets() {
    let arr = [];

    for (let a = 1; a < 10; a++) {
        for (let b = a + 1; b < 10; b++) {
            for (let c = b + 1; c < 10; c++) {
                for (let d = c + 1; d < 10; d++) {                    
                    arr.push([a, b, c, d]);
                }
            }
        }
    }

    return arr;
}

function getPermutations(arr, size, permutations) {
    if (size == 1) {
        permutations.push([...arr]);
    }

    for (let i = 0; i < size; i++) {
        getPermutations(arr, size - 1, permutations);

        if (size % 2 == 1) {
            [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        } else {
            [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
        }
    }

    return permutations;
}

module.exports = { arithmeticExpressions };