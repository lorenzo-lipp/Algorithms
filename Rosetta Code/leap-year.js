/* 
Leap year

Determine whether a given year is a leap year in the Gregorian calendar.
*/

function isLeapYear(year) {
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return year % 4 === 0;
}

module.exports = { isLeapYear };