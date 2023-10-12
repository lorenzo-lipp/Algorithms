/* 
Problem 38: Pandigital multiples

Take the number 192 and multiply it by each of 1, 2, and 3:
192×1=192192×2=384192×3=576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).
The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).
What is the largest 1 to k pandigital k-digit number that can be formed as the concatenated product of an integer with (1, 2, ..., n) where n > 1?
*/

function pandigitalMultiples(k) {
    let num = 1;
    let numStr = String(num);
    let biggerPandigital = "";

    while (numStr.length <= k / 2) {
        let pandigital = numStr;
        let multiple = 2;

        while (pandigital.length < k) {
            pandigital += String(num * multiple);
            multiple++;

            if (isPandigital(pandigital, k) && biggerPandigital < pandigital) {
                biggerPandigital = pandigital;
            }
        }

        num++;
        numStr = String(num);
    }

    return +biggerPandigital;
}

function isPandigital(n, k) {
    if (n.length !== k) return false;

    for (let i = 1; i <= k; i++) {
        if (!n.includes(i)) return false;
    }

    return true;
}

module.exports = { pandigitalMultiples };