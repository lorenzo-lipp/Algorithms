/* 
Hash from two arrays
Given two arrays, create a hash object where the elements from one array (the keys) are linked to the elements of the other (the values).

Example:

const firstArr = [1, 2, 3];
const secondArr = ["a", "b", "c"];
const hashObj = arrToObj(firstArr, secondArr);
The hash object created from the arrays above will be {1: "a", 2: "b", 3: "c"}.
*/

function arrToObj (keys, vals) {
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let val = i < vals.length ? vals[i] : undefined;

        obj[key] = val;
    }

    return obj;
}

module.exports = { arrToObj };