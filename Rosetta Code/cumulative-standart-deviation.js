/* 
Cumulative standard deviation

Suppose that the entire population of interest is eight students in a particular class. 
For a finite set of numbers, the population standard deviation is found by taking the square root of the average of the squared deviations of the values subtracted from their average value. 
The marks of a class of eight students (that is, a statistical population) are the following eight values:
2, 4, 4, 4, 5, 5, 7, 9
These eight data points have the mean (average) of 5:
μ=(2+4+4+4+5+5+7+9)/8=40/8=5
First, calculate the deviations of each data point from the mean, and square the result of each:
Deviations of each data	    Square the result
(2−5)^2=(−3)^2=9              (5−5)^2=0^2=0
(4−5)^2=(−1)^2=1              (5−5)^2=0^2=0
(4−5)^2=(−1)^2=1              (7−5)^2=2^2=4
(4−5)^2=(−1)^2=1              (9−5)^2=4^2=16
The variance is the mean of these values:
σ^2=(9+1+1+1+0+0+4+16)/8=32/8=4
and the population standard deviation is equal to the square root of the variance:
σ=√4=2
Write a function that takes an array of numbers as parameter and returns the standard deviation of the series.
*/

function standardDeviation(arr) {
    let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    let deviations = Array(arr.length).fill().map((_, i) => (arr[i] - avg) ** 2);
    let std = Math.sqrt(deviations.reduce((a, b) => a + b) / arr.length);

    return Math.round(std * 1000) / 1000;
}

module.exports = { standardDeviation };