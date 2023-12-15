/* 
Problem 92: Square digit chains

A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.
For example, 
44→32→13→10→1→1
85→89→145→42→20→4→16→37→58→89
Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. 
What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.
How many starting numbers below limit will arrive at 89?
*/

function squareDigitChains(limit) {
    let acc = 0;

    for (let n = 1; n < limit; n++) {
        let chainNum = n;

        while (chainNum !== 1 && chainNum !== 89) {
            chainNum = sumSquareDigits(chainNum);
        }

        if (chainNum === 89) acc++;
    }

    return acc;
}

function sumSquareDigits(num) {
    let acc = 0;

    while (num > 0) {
        let remainder = num % 10;

        acc += remainder ** 2;
        num -= remainder;
        num /= 10;
    }

    return acc;
}

module.exports = { squareDigitChains };