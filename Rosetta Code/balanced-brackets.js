/* 
Balanced brackets

Determine whether a generated string of brackets is balanced; 
That is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.
*/

function isBalanced(str) {
    let openBrackets = 0;

    for (let char of str) {
        if (char === "[") {
            openBrackets++;
        } else if (char === "]") {
            if (openBrackets === 0) return false;
            else openBrackets--;
        }
    }

    return openBrackets === 0;
}

module.exports = { isBalanced };