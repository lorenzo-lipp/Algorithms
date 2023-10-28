/* 
Problem 52: Permuted multiples

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
Find the smallest positive integer, such that multiplied by integers {2,3,…,n}, contain the same digits.
*/

function permutedMultiples(n) {
    for (let value = 10; true; value++) {
        let isPermuted = true;
        let digitsAmount = Array(10).fill(0);
        let strValue = String(value);
        for (let digit of strValue) digitsAmount[digit]++;

        for (let multiple = n; multiple > 1; multiple--) {
            let newDigitsAmount = Array(10).fill(0);
            let newValue = String(value * multiple);

            for (let digit of newValue) newDigitsAmount[digit]++;

            for (let i = 0; i < 10; i++) {
                if (newDigitsAmount[i] !== digitsAmount[i]) {
                    isPermuted = false;
                    break;
                }
            }

            if (isPermuted) continue;
            else break;
        }

        if (isPermuted) return value;
    }
}

module.exports = { permutedMultiples };