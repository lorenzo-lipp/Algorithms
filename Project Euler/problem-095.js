/* 
Problem 95: Amicable chains

The proper divisors of a number are all the divisors excluding the number itself. 
For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.
Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. 
For this reason, 220 and 284 are called an amicable pair.
Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:
12496→14288→15472→14536→14264(→12496→⋯)
Since this chain returns to its starting point, it is called an amicable chain.
Find the smallest member of the longest amicable chain with no element exceeding limit.
*/

function amicableChains(limit) {
    let table = getAmicableTable(limit);
    let longestChainSize = 0;
    let smallerChainMember = 0;

    for (let i = 1; i <= limit; i++) {
        let chain = new Set();
        let firstElement = i;
        let smallerElement = i;
        let lastElement = i;
        
        chain.add(firstElement);

        while (true) {
            lastElement = table[lastElement];

            if (chain.has(lastElement) || lastElement > limit) break;
            else chain.add(lastElement);

            smallerElement = Math.min(lastElement, smallerElement);
        }

        if (lastElement === firstElement && longestChainSize < chain.size) {
            smallerChainMember = smallerElement;
            longestChainSize = chain.size;
        } 
    }

    return smallerChainMember;
}

function getAmicableTable(n) {
    const table = Array(n + 1).fill(1);

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j * i <= n; j++) {
            table[j * i] += i;
        }
    }

    return table;
}

module.exports = { amicableChains };