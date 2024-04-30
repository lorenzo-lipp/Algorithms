/* 
Letter frequency

Given a string, calculate the frequency of each character.
All characters should be counted. 
This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.
Write a function to count the occurrences of each character in a given string.
The function should return a 2D array with each of the elements in the following form: ['char', freq]. 
The character should be a string with a length of 1, and frequency is a number denoting the count.
For example, given the string "ab", your function should return [['a', 1], ['b', 1]].
*/

function letterFrequency(txt) {
    let frequency = {};

    for (let letter of txt) {
        if (frequency[letter]) frequency[letter]++;
        else frequency[letter] = 1;
    }

    let result = [];

    for (let key of Object.keys(frequency)) result.push([key, frequency[key]]);
    
    return result.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });
}

module.exports = { letterFrequency };