/* 
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^exponent?
*/

function powerDigitSum(exponent) {
    let reverseNum = [2];

    if (exponent === 0) return 1;
    while (exponent > 1) {
        for (let index = reverseNum.length - 1; index >= 0; index--) {
            let digit = reverseNum[index]
            let newValue = digit * 2;

            if (newValue >= 10) {
                reverseNum[index] = newValue - 10;
                if (index === reverseNum.length - 1) reverseNum.push(1);
                else reverseNum[index + 1] += 1;
            } else {
                reverseNum[index] = newValue;
            }
        }
        exponent--;
    }

    return reverseNum.reduce((a, b) => a + b);
}
  
module.exports = { powerDigitSum }