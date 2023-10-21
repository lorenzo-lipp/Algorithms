/* 
Problem 46: Goldbach's other conjecture

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2
It turns out that the conjecture was false.
What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

function goldbachsOtherConjecture() {
    for (let i = 3; true; i += 2) {
        if (isPrime(i)) continue;

        let breaksConjecture = true;

        for (let j = Math.floor(Math.sqrt(i / 2) ); j > 0; j--) {
            if (isPrime(i - 2 * j ** 2)) {
                breaksConjecture = false;
                break;
            }
        }

        if (breaksConjecture) return i;
    }
}

function isPrime(num) {
    if (num % 2 === 0) return false;

    let maxNum = Math.sqrt(num);

    for (let divisor = 3; divisor <= maxNum; divisor += 2) {
        if (num % divisor === 0) return false;
    }

    return true;
}

module.exports = { goldbachsOtherConjecture };