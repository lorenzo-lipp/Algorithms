/* 
Greatest subsequential sum

Given a sequence of integers, find a continuous subsequence which maximizes the sum of its elements, that is, the elements of no other single subsequence add up to a value larger than this one.
An empty subsequence is considered to have the sum of 0; 
thus if all elements are negative, the result must be the empty sequence.
*/

function maximumSubsequence(arr) {
    let bestSequence = { start: 0, end: 0, val: 0 };
    let sequence = { start: 0, end: 0, val: 0};

    for (let i = 0; i < arr.length; i++) {
        let newSum = sequence.val + arr[i];

        if (arr[i] > 0) {
            sequence.end = i + 1;
            sequence.val = newSum;
        } else if (newSum < 0) {
            sequence.start = i + 1;
            sequence.end = i + 1;
            sequence.val = 0;
        } else {
            sequence.val = newSum;
        }

        if (sequence.val > bestSequence.val) bestSequence = Object.assign({}, sequence);
    }

    return arr.slice(bestSequence.start, bestSequence.end);
}

module.exports = { maximumSubsequence };