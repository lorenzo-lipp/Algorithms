/* 
Problem 104: Pandigital Fibonacci ends

The Fibonacci sequence is defined by the recurrence relation:
Fn=Fn−1+Fn−2, where F1=1 and F2=1 
It turns out that F541, which contains 113 digits, is the first Fibonacci number for which the last nine digits are 1 - 9 pandigital (contain all the digits 1 to 9, but not necessarily in order). 
And F2749, which contains 575 digits, is the first Fibonacci number for which the first nine digits are 1 - 9 pandigital.
Given that Fk is the first Fibonacci number for which the first nine digits AND the last nine digits are 1 - 9 pandigital, find k.
*/

function pandigitalFibonacciEnds() {
    let fn1 = [1];
    let fn2 = [1];
    let n = 2;

    while (!isBothEndsPandigital(fn1)) {
        let oldFn1 = fn1;

        let carry = 0;

        for (let i = 0; i < fn1.length; i++) {
            let sum = fn1[i] + (i >= fn2.length ? 0 : fn2[i]) + carry;
            let val = sum % 10;

            carry = (sum - val) / 10;

            fn2[i] = val;
        }

        if (carry) fn2.push(carry);

        fn1 = fn2;
        fn2 = oldFn1;

        if (fn1.length > 250) {
            fn1.splice(10, 150);
            fn2.splice(10, 150);
        }

        n++;
    }

    return n;
}

function isBothEndsPandigital(arr) {
    if (arr.length < 9) return false;

    let count1 = Array(10).fill(0);
    let count2 = Array(10).fill(0);

    for (let i = 0; i < 9; i++) {
        count1[arr[i]]++;
        count2[arr[arr.length - 1 - i]]++;
    }

    return count1.every((v, i) => i > 0 ? v === 1 : true) && 
           count2.every((v, i) => i > 0 ? v === 1 : true);
}

module.exports = { pandigitalFibonacciEnds };