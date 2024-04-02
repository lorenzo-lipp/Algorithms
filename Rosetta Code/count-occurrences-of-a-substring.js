/* 
Count occurrences of a substring

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.
The function should take two arguments:
the first argument being the string to search, and the second a substring to be searched for.
It should return an integer count.
The matching should yield the highest number of non-overlapping matches.
In general, this essentially means matching from left-to-right or right-to-left. 
*/

function countSubstring(str, subStr) {
    let reverseStr = str.split("").reverse().join("");
    let reverseSubStr = subStr.split("").reverse().join("");
    let matchesCount = [0, 0];
    
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] === subStr[j]) {
            j++;
            
            if (j === subStr.length) {
                j = 0;
                matchesCount[0]++;
            }
        } else {
            j = 0;
        }
    }

    for (let i = 0, j = 0; i < reverseStr.length; i++) {
        if (reverseStr[i] === reverseSubStr[j]) {
            j++;
            
            if (j === reverseSubStr.length) {
                j = 0;
                matchesCount[1]++;
            }
        } else {
            j = 0;
        }
    }

    return Math.max(...matchesCount);
}

module.exports = { countSubstring };