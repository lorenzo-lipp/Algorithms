/* 
Problem 57: Square root convergents

It is possible to show that the square root of two can be expressed as an infinite continued fraction.
2–√=1+1/(2+1/(2+1/(2+…)))
By expanding this for the first four iterations, we get:
1+1/2=3/2=1.5
1+1/(2+1/2)=7/5=1.4
1+1/(2+1/(2+1/2))=17/12=1.41666…
1+1/(2+1/(2+1/(2+1/2)))=41/29=1.41379…
The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.
In the first n expansions, how many fractions contain a numerator with more digits than denominator?
*/

function squareRootConvergents(n) {
    let fraction = [BigInt(5), BigInt(2)];
    let counter = 0;

    for (let expansion = 2; expansion < n; expansion++) {
        fraction = [BigInt(2) * fraction[0] + fraction[1], fraction[0]];

        if (String(fraction[0] + fraction[1]).length > String(fraction[0]).length) {
            counter++;
        }
    }

    return counter;
}

module.exports = { squareRootConvergents };