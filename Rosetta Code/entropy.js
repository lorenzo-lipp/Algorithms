/* 
Entropy

Calculate the Shannon entropy H of a given input string.
Given the discrete random variable X that is a string of N "symbols" (total characters) consisting of n different characters (n=2 for binary), the Shannon entropy of X in bits/symbol is:
H2(X)= −∑ n i=1 counti/N * log2(counti/N)
 
where counti is the count of character ni.
*/

function entropy(s) {
    let symbols = new Map();
    let result = 0;

    for (let symbol of s) {
        if (symbols.get(symbol)) {
            symbols.set(symbol, symbols.get(symbol) + 1);
        } else {
            symbols.set(symbol, 1);
        }
    }

    for (let val of symbols.values()) {
        let ratio = val / s.length;
        result -= ratio * Math.log2(ratio);
    }

    return result;
}

module.exports = { entropy };