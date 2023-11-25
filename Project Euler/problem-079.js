/* 
Problem 79: Passcode derivation

A common security method used for online banking is to ask the user for three random characters from a passcode. 
For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.
The arrays, keylog1, keylog2, and keylog3, contains fifty successful login attempts.
Given that the three characters are always asked for in order, analyze the array so as to determine the shortest possible secret passcode of unknown length.
*/

function passcodeDerivation(arr) {
    let digits = Array(10).fill().map((_, i) => ({num: i, before: new Set(), after: new Set()}));
    let password = 0;

    for (let attempt of arr) {
        let char1 = Math.floor(attempt / 100);
        let char2 = Math.floor(attempt / 10) % 10;
        let char3 = attempt % 10;

        digits[char1].before.add(char2);
        digits[char1].before.add(char3);
        digits[char2].after.add(char1);
        digits[char2].before.add(char3);
        digits[char3].after.add(char1);
        digits[char3].after.add(char2);

        for (let char of digits[char2].before) digits[char1].before.add(char);
        for (let char of digits[char3].before) digits[char1].before.add(char);
        for (let char of digits[char1].after) digits[char2].after.add(char);
        for (let char of digits[char3].before) digits[char2].before.add(char);
        for (let char of digits[char1].after) digits[char3].after.add(char);
        for (let char of digits[char2].after) digits[char3].after.add(char);
    }

    digits = digits.filter(d => d.before.size !== 0 || d.after.size !== 0);
    digits.sort((d1, d2) => {
        let diff = d2.before.size - d1.before.size

        if (diff === 0) return d2.num - d1.num;
        return diff;
    });

    for (let digit of digits) {
        password = password * 10 + digit.num;
    }

    return password;
}

module.exports = { passcodeDerivation };