/* 
Problem 19: Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function countingSundays(firstYear, lastYear) {
    if (firstYear < 1900) return new Error("firstYear should be greater than 1900.");
    let day = 1;
    let firstSunday = 7;
    let sundaysOnFirstMonthDay = 0;

    for (let year = 1900; year <= lastYear; year++) {
        if (year < firstYear) {
            if (isLeapYear(year)) day += 366;
            else day += 365;
            continue;
        }

        for (let month = 1; month <= 12; month++) {
            let remainder = day % firstSunday;

            if (remainder === 0) sundaysOnFirstMonthDay++;
            
            if (month === 2) {
                if (isLeapYear(year)) day += 29;
                else day += 28;
            } else if ([4, 6, 9, 11].includes(month)) {
                day += 30;
            } else {
                day += 31;
            }
        }
    }

    return sundaysOnFirstMonthDay;
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 === 0 ? year % 400 === 0 : true);
}

module.exports = { countingSundays }