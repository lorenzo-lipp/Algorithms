/* 
Problem 51: Prime digit replacements

By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.
By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family:
56003, 56113, 56333, 56443, 56663, 56773, and 56993. 
Consequently 56003, being the first member of this family, is the smallest prime with this property.
Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an n prime value family.
*/

function primeDigitReplacements(n) {
    let skipValues = {};
    let digits = 2;

    if (n > 9) return new Error("Invalid input.");

    while (true) {
        let initialValue = 10 ** (digits - 1);
        let maxValue = initialValue * 10;
        let arr = Array(digits).fill(1);
        let permutations = [];
        
        for (let i = 1; i < digits; i++) {
            arr[digits - i] = 0;
            permutations.push(...getPermutations([...arr], digits, []));
        }

        for (let value = initialValue; value < maxValue; value++) {
            if (value in skipValues || !isPrime(value)) continue;

            for (let permutation of permutations) {
                let familySize = 1;
                let digitThatRepeat = repeatingDigit(value, permutation);

                if (digitThatRepeat === null) continue;

                for (let i = 1; i < 10 - digitThatRepeat; i++) {
                    let nextVal = value + permutation * i; 

                    if (nextVal >= maxValue) break;

                    if (nextVal in skipValues || !isPrime(nextVal)) skipValues[nextVal] = true;
                    else familySize++;
                }

                if (familySize === n) return value;
            }
        }

        digits++;
    }
}

function getPermutations(arr, size, permutations) {
    if (size == 1) {
        let nextNum = arr.reduce((acc, v, i) => acc + v * 10 ** i, 0);
        if (!permutations.includes(nextNum)) {
            permutations.push(nextNum);
        }
    }

    for (let i = 0; i < size; i++) {
        getPermutations(arr, size - 1, permutations);

        if (size % 2 == 1) {
            [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        } else {
            [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
        }
    }

    return permutations;
}

function isPrime(num) {
    if (num % 2 === 0) return false;

    let maxNum = Math.sqrt(num);

    for (let divisor = 3; divisor <= maxNum; divisor += 2) {
        if (num % divisor === 0) return false;
    }

    return true;
}

function repeatingDigit(num, permutation) {
    let strPermutation = String(permutation);
    let strNum = String(num);
    let digit = null;

    for (let i = 1; i <= strPermutation.length; i++) {
        if (strPermutation[strPermutation.length - i] === "0") continue;

        if (digit === null) digit = strNum[strNum.length - i];
        else if (strNum[strNum.length - i] !== digit) return null;
    }

    return +digit;
}

module.exports = { primeDigitReplacements };