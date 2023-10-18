/* 
Problem 43: Sub-string divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.
Let d1 be the 1st digit, d2 be the 2nd digit, and so on. 
In this way, we note the following:
d2d3d4 = 406 is divisible by 2
d3d4d5 = 063 is divisible by 3
d4d5d6 = 635 is divisible by 5
d5d6d7 = 357 is divisible by 7
d6d7d8 = 572 is divisible by 11
d7d8d9 = 728 is divisible by 13
d8d9d10 = 289 is divisible by 17
Find the sum of all 0 to n pandigital numbers with sub-strings fulfilling n - 2 of these divisibility properties.
Note: Pandigital numbers starting with 0 are to be considered in the result.
*/

function substringDivisibility(n) {
    let digits = Array(n + 1).fill().map((_, i) => i);
    let pandigitals = [];
    let primes = [2, 3, 5, 7, 11, 13, 17];
    let sum = 0;

    getPermutations(digits, n + 1, pandigitals);

    for (let pandigital of pandigitals) {
        let pandigitalStr = String(pandigital);
        let fulfill = true;

        for (let i = n; i > 2; i--) {
            let subs;

            if (n === pandigitalStr.length) subs = pandigitalStr.substring(i - 3, i);
            else subs = pandigitalStr.substring(i - 2, i + 1);

            fulfill = +subs % primes[i - 3] === 0;

            if (!fulfill) break;
        }

        if (fulfill) {
            sum += pandigital;
        }
    }

    return sum;
}

function getPermutations(arr, size, permutations) {
    if (size == 1) {
        permutations.push(arr.reduce((acc, v, i) => acc + v * 10 ** i, 0));
        return;
    }

    for (let i = 0; i < size; i++) {
        getPermutations(arr, size - 1, permutations);

        if (size % 2 == 1) {
            [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        } else {
            [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
        }
    }
}

module.exports = { substringDivisibility };