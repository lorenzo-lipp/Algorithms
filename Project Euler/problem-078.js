/* 
Problem 78: Coin partitions

Let p(n) represent the number of different ways in which n coins can be separated into piles. 
For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.
Coin piles
OOOOO
OOOO O
OOO OO
OOO O O
OO OO O
OO O O O
O O O O O
Find the least value of n for which p(n) is divisible by divisor.
*/

function coinPartitions(divisor) {
    let pentagons = [];
    let partitions = [1, 1];
    let signals = [1, 1, -1, -1];
    let n = 2;

    addNextPentagons(pentagons);

    for (; partitions[partitions.length - 1] !== 0; n++) {
        let piles = 0;
        
        if (n > pentagons[pentagons.length - 1]) {
            addNextPentagons(pentagons);
        }

        for (let i = 0; pentagons[i] <= n; i++) {
            // https://en.wikipedia.org/wiki/Pentagonal_number_theorem
            piles += partitions[n - pentagons[i]] * signals[i % 4];
        }

        let modulo = piles % divisor;
        partitions.push(modulo);
    }

    return n - 1;
}

function addNextPentagons(arr) {
    let n = arr.length / 2 + 1;
    let pentagon = getPengatonNum(n);

    arr.push(pentagon);
    arr.push(pentagon + n);
}

function getPengatonNum(n) {
    return n * (3*n - 1) / 2;
}

module.exports = { coinPartitions };