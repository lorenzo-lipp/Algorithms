/* 
Problem 68: Magic 5-gon ring

Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.
[https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png]
Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. 
For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.
It is possible to complete the ring with four different totals: 9, 10, 11, and 12. 
There are eight solutions in total.
Total
Solution Set
9	4,2,3; 5,3,1; 6,1,2
9	4,3,2; 6,2,1; 5,1,3
10	2,3,5; 4,5,1; 6,1,3
10	2,5,3; 6,3,1; 4,1,5
11	1,4,6; 3,6,2; 5,2,4
11	1,6,4; 5,4,2; 3,2,6
12	1,5,6; 2,6,4; 3,4,5
12	1,6,5; 3,5,4; 2,4,6
By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.
Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. 
What is the maximum 16-digit string for a "magic" 5-gon ring?
[https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png]
*/

function magic5GonRing() {
    return magicGonRing(1, 10);
}

function magicGonRing(start, end) {
    let ringSize = (end - start + 1) / 2;
    let ring = Array(ringSize).fill().map((_, i) => [end - i, null, null]);

    ring[ringSize - 1][1] = end - ringSize;
    ring[0][2] = start;
    ring[ringSize - 2][1] = start + 1;
    ring[1][1] = start;
    ring[ringSize - 2][2] = end - ringSize;

    let sum = ring[ringSize - 2].reduce((a, b) => a + b);

    for (let i = 0; i < ringSize; i++) {
        if (i !== 0 && ring[i][1] === null && ring[i-1][2] !== null) {
            ring[i][1] = ring[i-1][2];
        }

        let ringSum = ring[i].reduce((a, b) => a + b);
        let index = ring[i].indexOf(null);

        if (index !== -1) {
            ring[i][index] = sum - ringSum;
        }
    }

    let maxNum = ring[ringSize - 1].reduce((a, b) => a + String(b), "");

    for (let i = 0; i < ringSize - 1; i++) {
        maxNum += ring[i].reduce((a, b) => a + String(b), "");
    }

    return +maxNum;
}

module.exports = { magic5GonRing };