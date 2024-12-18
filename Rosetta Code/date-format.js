/* 
Date format

Return an array with two date strings of the current date with the following specifications:
The first string's date order should be the year number, month number, and day number separated by dashes (-).
The first string's year should be four digits in length.
The first string's month and day should not contain any leading zeros.
The second string's weekday and month names should not be abbreviated.
The second string's day should not contain any leading zeros.
Example outputs:
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
*/

/**
 * Return an array with two date strings of the current date.
 * @returns {[String, String]}
 */
function getDateFormats() {
    let now = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return [
        `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
    ];
}

module.exports = { getDateFormats };