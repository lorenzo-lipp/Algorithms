/* 
Problem 36: Double-base palindromes

The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2.
(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function doubleBasePalindromes(n) {
    let sum = 0;
    
    for (let num = 1; num <= n; num++) {
        if (isPalindrome(num) && isBinaryPalindrome(num)) {
            sum += num;
        }
    }

    return sum;
}

function isPalindrome(num) {
    let numStr = num.toString();
    let halfLen = numStr.length / 2;
    
    for (let i = 0; i <= halfLen; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) return false;
    }

    return true;
}

function isBinaryPalindrome(num) {
    let numStr = num.toString("2");
    let halfLen = numStr.length / 2;
    
    for (let i = 0; i <= halfLen; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) return false;
    }

    return true;
}

module.exports = { doubleBasePalindromes };