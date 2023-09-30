/* 
Averages/Mode

Write a function mode to find the value that appears most in an array.
The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.
*/

function mode(arr) {
    let hashTable = {}
    let maxRepetitions = 0;

    for (let element of arr) {
        if (hashTable[element]) {
            hashTable[element]++;

            if (hashTable[element] > maxRepetitions) {
                maxRepetitions = hashTable[element];
            }
        } else {
            hashTable[element] = 1;
        }
    }

    let result = [];

    for (let key in hashTable) {
        if (hashTable[key] === maxRepetitions) {
            result.push(+key);
        }
    }

    return result;
}

module.exports = { mode };