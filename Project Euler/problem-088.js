/* 
Problem 88: Product-sum numbers

A natural number, N, that can be written as the sum and product of a given set of at least two natural numbers, 
{a1,a2,…,ak} is called a product-sum number: N=a1+a2+⋯+ak=a1×a2×⋯×ak.
For example, 6 = 1 + 2 + 3 = 1 × 2 × 3.
For a given set of size, k, we shall call the smallest N with this property a minimal product-sum number. 
The minimal product-sum numbers for sets of size, k = 2, 3, 4, 5, and 6 are as follows.
k=2: 4 = 2 × 2 = 2 + 2
k=3: 6 = 1 × 2 × 3 = 1 + 2 + 3
k=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4
k=5: 8 = 1 × 1 × 2 × 2 × 2 = 1 + 1 + 2 + 2 + 2
k=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
Hence for 2 ≤ k ≤ 6, the sum of all the minimal product-sum numbers is 4 + 6 + 8 + 12 = 30; note that 8 is only counted once in the sum.
In fact, as the complete set of minimal product-sum numbers for 2 ≤ k ≤ 12 is {4,6,8,12,15,16}, the sum is 61.
What is the sum of all the minimal product-sum numbers for 2 ≤ k ≤ limit?
*/

function productSumNumbers(limit) {
    let numbers = new Set();
    let acc = 0;
    let memo = [];

    for (let k = 2; k <= limit; k++) {
        numbers.add(minimalProductSum(k, memo));
    }

    for (let number of numbers) {
        acc += number;
    }

    return acc;
}

function minimalProductSum(k, memo) {
    for (let i = k + 1; true; i++) {
        let multiplications = memo.length > i ? memo[i] : getMultiplications(i);
        memo[i] = multiplications;

        for (let [arr, sum] of multiplications) {
            if (sum + k - arr.length === i) return i;
        }
    }
}

function getDivisors(num) {
    let arr = [];

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

function getMultiplications(target) {
    let divisors = getDivisors(target);
    let output = [];

    for (let i = 0; i < divisors.length; i++) {
        getMultiplicationsAux([divisors[i]], divisors[i], divisors, target, output, i);
    }

    return output;
}

function getMultiplicationsAux(arr, prod, divisors, target, output, index) {
    if (prod === target) return output.push([arr, arr.reduce((a, b) => a + b)]);

    for (let i = index; i < divisors.length; i++) {
        let newProd = divisors[i] * prod;

        if (newProd > target) break;

        getMultiplicationsAux([...arr, divisors[i]], newProd, divisors, target, output, index);
    }
}

module.exports = { productSumNumbers };