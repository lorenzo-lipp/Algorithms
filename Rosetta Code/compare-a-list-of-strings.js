/* 
Compare a list of strings

A list is an ordered set of values that may contain duplicates. Here is an example:
const list = [['AA',  'BB', 'CC'], ['AA', 'ACB', 'AA'], [], ['AA']];
Given a list of arbitrarily many strings, implement a function for each of the following conditions:
test if they are all lexically equal
test if every string is lexically less than the one after it (i.e. whether the list is in strict ascending order)
*/

function allEqual(arr) {
    return arr.every(v => v === arr[0]);
}

function azSorted(arr) {
    return arr.reduce((a, b, i) => a && (i > 0 ? b > arr[i - 1] : true), true);
}

module.exports = { allEqual, azSorted };