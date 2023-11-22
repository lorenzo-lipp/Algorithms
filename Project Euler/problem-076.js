/* 
Problem 76: Counting summations

It is possible to write five as a sum in exactly six different ways:
4 + 1
3 + 2
3 + 1 + 1
2 + 2 + 1
2 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1
How many different ways can n be written as a sum of at least two positive integers?
*/

function countingSummations(n) {
    return countingSummationsAux(n, n - 1);
}

function countingSummationsAux(n, lastAdded) {
    if (n === 0) return 1;

    let total = 0;

    for (let i = n < lastAdded ? n : lastAdded; i > 0; i--) {
        total += i === 1 ? 1 : countingSummationsAux(n - i, i);
    }

    return total;
}

module.exports = { countingSummations };