/* 
Generate lower case ASCII alphabet

Write a function to generate an array of lower case ASCII characters for a given range. 
For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd'].
*/

function lascii(cFrom, cTo) {
    let from = cFrom.charCodeAt(0);
    let to = cTo.charCodeAt(0);
    let result = [];

    for (let i = from; i <= to; i++) {
        result.push(String.fromCharCode(i));
    }

    return result;
}

module.exports = { lascii };