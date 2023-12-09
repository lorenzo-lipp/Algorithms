/* 
Problem 89: Roman numerals

For a number written in Roman numerals to be considered valid there are basic rules which must be followed. 
Even though the rules allow some numbers to be expressed in more than one way there is always a best way of writing a particular number.
Numerals must be arranged in descending order of size.
M, C, and X cannot be equaled or exceeded by smaller denominations.
D, L, and V can each only appear once.
In addition to the three rules given above, if subtractive combinations are used then the following four rules must be followed.
Only one I, X, and C can be used as the leading numeral in part of a subtractive pair.
I can only be placed before V and X.
X can only be placed before L and C.
C can only be placed before D and M.
For example, it would appear that there are at least six ways of writing the number sixteen:
IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI
However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.
The array, roman, will contain numbers written with valid, but not necessarily minimal, Roman numerals.
Find the number of characters saved by writing each of these in their minimal form.
Note: You can assume that all the Roman numerals in the array contain no more than four consecutive identical units.
*/

function romanNumerals(numerals) {
    let romanToNum = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    };
    let acc = 0;

    for (let roman of numerals) {
        let num = 0;

        for (let i = 0; i < roman.length; i++) {
            let char = roman[i];
            let pair = i + 1 < roman.length ? roman[i] + roman[i + 1] : "";

            if (pair in romanToNum) {
                num += romanToNum[pair];
                i++;
            } else {
                num += romanToNum[char];
            }
        }

        acc += roman.length - minimalRomanSize(num);
    }

    return acc;
}

function minimalRomanSize(num) {
    let size = 0;

    while (num >= 1000) { num -= 1000; size++; } // M

    if (num >= 900) { num -= 900; size += 2; } // CM

    if (num >= 500) { num -= 500; size++; } // D
    else if (num >= 400) { num -= 400; size += 2; } // CD

    while (num >= 100) { num -= 100; size++; } // C

    if (num >= 90) { num -= 90; size += 2; } // XC

    if (num >= 50) { num -= 50; size++; } // L
    else if (num >= 40) { num -= 40; size += 2; } // XL

    while (num >= 10) { num -= 10; size++; } // X

    if (num >= 9) { num -= 9; size += 2; } // IX

    if (num >= 5) { num -= 5; size++; } // V
    else if (num >= 4) { num -= 4; size += 2; } // IV

    size += num;

    return size;
}

module.exports = { romanNumerals }