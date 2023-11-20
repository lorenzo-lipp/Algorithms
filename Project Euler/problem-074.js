/* 
Problem 74: Digit factorial chains

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:
1!+4!+5!=1+24+120=145 
Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; 
it turns out that there are only three such loops that exist:
169→363601→1454→169
871→45361→871
872→45362→872
It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. 
For example, 
69→363600→1454→169→363601(→1454)
78→45360→871→45361(→871)
540→145(→145)
Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.
How many chains, with a starting number below n, contain exactly sixty non-repeating terms?
*/

function digitFactorialChains(n) {
    let acc = 0;
    let factorial = Array(10).fill(1);
    for (let i = 2; i < 10; i++) factorial[i] = i * factorial[i - 1];

    for (let num = 2; num < n; num++) {
        let chain = new Set();
        let next = num;

        chain.add(next);

        while (true) {
            next = sumFactorialDigits(next, factorial);

            if (chain.has(next) || chain.size > 60) break;
            chain.add(next);
        }

        if (chain.size === 60) acc++;
    }

    return acc;
}

function sumFactorialDigits(num, factorial) {
    let acc = 0;
    let numStr = String(num);

    for (let digit of numStr) acc += factorial[digit];

    return acc;
}

module.exports = { digitFactorialChains };