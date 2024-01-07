/* 
Emirp primes
An emirp (prime spelled backwards) are primes that when reversed (in their decimal representation) are a different prime.

Write a function that:

Shows the first n emirp numbers.
Shows the emirp numbers in a range.
Shows the number of emirps in a range.
Shows the nth emirp number.
The function should accept two parameters. 
The first will receive n or the range as an array. 
The second will receive a boolean, that specifies if the function returns the emirps as an array or a single number (the number of primes in the range or the nth prime). 
According to the parameters the function should return an array or a number.
*/

function emirps(n, isList = false) {
    if (!Array.isArray(n) && isList) return firstNEmirps(n);
    if (!Array.isArray(n) && !isList) return nthEmirp(n);
    if (Array.isArray(n) && isList) return emirpsRange(n[0], n[1]);
    if (Array.isArray(n) && !isList) return countEmirpsInRange(n[0], n[1]);
}

function firstNEmirps(n) {
    let primes = [13];
    let lastPrime = 13;

    while (primes.length < n) {
        for (let i = lastPrime + 2; true; i += 2) {
            let reverseI = reverseNum(i)
            if (reverseI !== i && isPrime(i) && isPrime(reverseI)) {
                lastPrime = i;
                primes.push(i);
                break;
            }
        }
    }

    return primes;
}

function nthEmirp(n) {
    return firstNEmirps(n)[n - 1];
}

function emirpsRange(n, m) {
    let primes = [];
    let lastI = n % 2 ? n - 2: n - 1;

    while (true) {
        for (let i = lastI + 2; true; i += 2) {
            if (i > m) return primes;

            let reverseI = reverseNum(i);

            if (reverseI !== i && isPrime(i) && isPrime(reverseI)) {
                lastI = i;
                primes.push(i);
                break;
            }
        }
    }
}

function countEmirpsInRange(n, m) {
    return emirpsRange(n, m).length;
}

function isPrime(num) {
    let maxDivisor = Math.floor(Math.sqrt(num));

    for (let i = maxDivisor; i > 1; i--) {
        if (num % i === 0) return false;
    }

    return true;
} 

function reverseNum(num) {
    let reversedNum = 0;
    let numSize = Math.floor(Math.log10(num));

    while (num > 0) {
        let remainder = num % 10;

        num -= remainder;
        num /= 10;
        reversedNum += remainder * 10 ** numSize;
        numSize--;
    }

    return reversedNum;
}

module.exports = { emirps };