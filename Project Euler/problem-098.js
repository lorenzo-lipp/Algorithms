/* 
Problem 98: Anagramic squares

By replacing each of the letters in the word CARE with 1, 2, 9, and 6 respectively, we form a square number: 1296=36^2. 
What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number: 9216=96^2. 
We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.
Using the words array, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).
What is the largest square number formed by any member of such a pair?
Note: All anagrams formed must be contained in the given words array.
*/

function anagramicSquares(words) {
    let anagramMap = getAnagramMap(words);
    let result = 0;

    for (let list of anagramMap.values()) {
        if (list.length < 2) continue;
        const size = list[0].length;
        const maxSq = 10 ** size;
        let matchSquares = [];

        for (let n = Math.ceil(Math.sqrt(maxSq / 10)), sq = n * n; sq < maxSq; n++, sq += 2 * n - 1) {
            for (let i = 0; i < list.length; i++) {
                if (squareMatch(sq, list[i])) {
                    matchSquares.push([sq, list[i]]);
                }
            }
        }

        for (let i = 0; i < matchSquares.length; i++) {
            let list1 = matchSquares[i];
            for (let j = i + 1; j < matchSquares.length; j++) {
                let list2 = matchSquares[j];

                if (list1[1] === list2[1]) continue;
                if (result < list2[0] && anagramsMatch(list1, list2)) {
                    result = list2[0];
                }
            }
        }
    }

    return result;
}

function squareMatch(square, word) {
    let arr = new Array(10).fill(null);
    let lastLetter = word.length - 1;
    let lettersUsed = new Set();

    while (square > 0) {
        let lastDigit = square % 10;
        let digitToLetter = arr[lastDigit];

        if (digitToLetter !== null) {
            if (word[lastLetter] !== digitToLetter) return false;
        } else {
            if (lettersUsed.has(word[lastLetter])) return false;

            arr[lastDigit] = word[lastLetter];
            lettersUsed.add(word[lastLetter]);
        }

        square -= lastDigit;
        square /= 10;
        lastLetter--;
    }

    return true;
}

function getAnagramMap(words) {
    let map = new Map();

    for (let word of words) {
        let hash = hashWord(word);
        let list = map.get(hash);

        if (list) list.push(word);
        else map.set(hash, [word]);
    }

    return map;
}

function hashWord(word) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let acc = 1;

    for (let char of word) {
        let position = char.charCodeAt(0) - 65;
        acc *= primes[position];
    }

    return acc;
}

function anagramsMatch([num1, word1], [num2, word2]) {
    let arr = new Array(10).fill(null);
    let lastLetter = word1.length - 1;

    while (num1 > 0) {
        let lastDigit = num1 % 10;
        arr[lastDigit] = word1[lastLetter];
        num1 -= lastDigit;
        num1 /= 10;
        lastLetter--;
    }

    lastLetter = word2.length - 1;

    while (num2 > 0) {
        let lastDigit = num2 % 10;
        if (arr[lastDigit] !== word2[lastLetter]) return false;
        num2 -= lastDigit;
        num2 /= 10;
        lastLetter--;
    }

    return true;
}

module.exports = { anagramicSquares };