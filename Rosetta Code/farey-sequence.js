/* 
Farey sequence

The Farey sequence Fn of order n is the sequence of completely reduced fractions between 0 and 1 which, when in lowest terms, have denominators less than or equal to n, arranged in order of increasing size.
The Farey sequence is sometimes incorrectly called a Farey series.
Each Farey sequence:
starts with the value 0, denoted by the fraction 0/1
ends with the value 1, denoted by the fraction 1/1.
The Farey sequences of orders 1 to 5 are:
F1=0/1,1/1
F2=0/1,1/2,1/1
F3=0/1,1/3,1/2,2/3,1/1
F4=0/1,1/4,1/3,1/2,2/3,3/4,1/1
F5=0/1,1/5,1/4,1/3,2/5,1/2,3/5,2/3,3/4,4/5,1/1
Write a function that returns the Farey sequence of order n. 
The function should have one parameter that is n. 
It should return the sequence as an array.
*/

function farey(n) {
    let sequence = [{str: '0/1', val: 0}, {str: '1/1', val: 1}];

    for (let denominator = n; denominator > 1; denominator--) {
        for (let numerator = denominator - 1; numerator > 0; numerator--) {
            if (canSimplify(numerator, denominator)) continue;

            sequence.push({str: numerator + '/' + denominator, val: numerator / denominator});
        }
    }

    sequence.sort((a, b) => a.val - b.val);

    return sequence.map(v => v.str);
}

function canSimplify(a, b) {
    while (b > 0) {
        [a, b] = [b, a];
        b = b % a;
    }

    return a !== 1;
}

module.exports = { farey };
