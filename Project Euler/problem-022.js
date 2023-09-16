/* 
Problem 22: Names scores

Using names, an array defined in the background containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
What is the total of all the name scores in the array?
*/

function namesScores(arr) {
    let sortedArr = [...arr].sort();
    let totalScore = 0;

    for (let [index, name] of sortedArr.entries()) {
        let value = computeName(name);
        totalScore += (index + 1) * value;
    }

    return totalScore;
}

function computeName(name) {
    let value = 0;

    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            value += code - 64;
        } else if (code >= 97 && code <= 122) {
            value += code - 96;
        }
    }

    return value
}

module.exports = { namesScores };