/* 
Amicable pairs

Two integers  N
  and  M
  are said to be amicable pairs if  N≠M
  and the sum of the proper divisors of  N
  ( sum(propDivs(N))
 )  =M
  as well as  sum(propDivs(M))=N
 .

Example:
1184 and 1210 are an amicable pair, with proper divisors:
1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.
The sum of the divisors for the first value, 1184, is 1210 and the sum of the divisors for the second value, 1210, is 1184.
Calculate and show here the Amicable pairs below 20,000 (there are eight).
*/

function amicablePairsUpTo(n) {
    const table = Array(n + 1).fill(1);
    let amicables = [];

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j * i <= n; j++) {
            table[j * i] += i;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (table[i] === 1 || table[i] > n) continue;
        if (i !== table[i] && i === table[table[i]]) {
            amicables.push([table[table[i]], table[i]]);
            table[table[i]] = null;
        }
    }

    return amicables;
}

module.exports = { amicablePairsUpTo };