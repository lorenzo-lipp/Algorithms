/* 
Problem 70: Totient permutation

Euler's Totient function, ϕ(n) (sometimes called the phi function), is used to determine the number of positive numbers less than or equal to n which are relatively prime to n. 
For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, ϕ(9)=6. 
The number 1 is considered to be relatively prime to every positive number, so ϕ(1)=1.
Interestingly, ϕ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.
Find the value of n, 1 < n < limit, for which ϕ(n) is a permutation of n and the ratio nϕ(n) produces a minimum.
*/

function totientPermutation(limit) {
    let primes = primesUpTo(limit / 2);
    let minimum = Infinity;
    let totient = null;

    for (let i = primes.length - 1; i > 0; i--) {
        for (let j = 0; j < primes.length; j++) {
            let multiplication = primes[i] * primes[j];
            let phi = multiplication - primes[i] - primes[j] + 1;
            let result = multiplication / phi;

            if (multiplication > limit) break;

            if (result < minimum && isPermutationOf(String(multiplication), String(phi))) {
                minimum = result;
                totient = multiplication;
            }
        }
    }

    return totient;
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

function primesUpTo(n) {
    let primes = [2];
    let value = 3;

    const isPrime = (num) => {
        let numSqrt = Math.sqrt(num);
        for (let prime of primes) {
            if (prime > numSqrt) return true;
            if (num % prime === 0) return false;
        }
        return false;
    };

    while (value < n) {
        if (isPrime(value)) primes.push(value);
        value += 2;
    }

    return primes;
}

module.exports = { totientPermutation };