/* 
Problem 17: Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?
Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

function numberLetterCounts(limit) {
    if (limit > 1000) return new Error("Limit should be less or equal to 1000.");
    let count = 0;
    let num = 1;

    while (num <= limit) {
        count += getCount(num);
        num++;
    }

    return count;
}

function getCount(num) {
    let count = 0;
    let dictionary = {
        "1": 3, // one
        "2": 3, // two
        "3": 5, // three
        "4": 4, // four
        "5": 4, // five
        "6": 3, // six
        "7": 5, // seven
        "8": 5, // eight
        "9": 4, // nine
        "10": 3, // ten
        "11": 6, // eleven
        "12": 6, // twelve
        "13": 8, // thirteen
        "14": 8, // fourteen
        "15": 7, // fifteen
        "16": 7, // sixteen
        "17": 9, // seventeen
        "18": 8, // eighteen
        "19": 8, // nineteen
        "20": 6, // twenty
        "30": 6, // thirty
        "40": 5, // forty
        "50": 5, // fifty
        "60": 5, // sixty
        "70": 7, // seventy
        "80": 6, // eighty
        "90": 6, // ninety
        "1000": 11 // one thousand and
    }

    if (num in dictionary) {
        count += dictionary[num];
    } else {
        let remainder = num % 100;
        if (num >= 100) {
            if (remainder !== 0) {
                count += 10; // hundred and
                if (remainder in dictionary) {
                    count += dictionary[remainder];
                } else { // compound number (e.g twenty-one)
                    let unit = remainder % 10;
                    count += dictionary[unit];
                    count += dictionary[remainder - unit];
                }                    
            } else {
                count += 7; // hundred
            }
            let result = Math.floor(num / 100);
            count += dictionary[result];
        } else { // compound number (e.g twenty-one)
            let unit = remainder % 10;
            count += dictionary[unit];
            count += dictionary[remainder - unit];
        }  
    } 

    return count;
}

module.exports = { numberLetterCounts }