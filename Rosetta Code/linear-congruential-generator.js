/* 
Linear congruential generator

A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. 
All linear congruential generators use this formula: rn+1=(a×rn+c) mod m
Where:
r0 is a seed.
r1, r2, r3, ..., are the random numbers.
a, c, m are constants.
If one chooses the values of a, c and m with care, then the generator produces a uniform distribution of integers from 0 to m−1.
LCG numbers have poor quality. 
rn and rn+1 are not independent, as true random numbers would be. 
Anyone who knows rn can predict rn+1, therefore LCG is not cryptographically secure. 
The LCG is still good enough for simple tasks like Miller-Rabin primality test, or FreeCell deals. 
Among the benefits of the LCG, one can easily reproduce a sequence of numbers, from the same r0. 
One can also reproduce such sequence with a different programming language, because the formula is so simple.
Write a function that takes r0,a,c,m,n as parameters and returns rn.
*/

function linearCongGenerator(r0, a, c, m, n) {
    let r = r0;

    for (let i = 0; i < n; i++) r = (a * r + c) % m

    return r;
}

module.exports = { linearCongGenerator };