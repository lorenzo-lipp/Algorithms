/* 
Problem 75: Singular integer right triangles

It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.
12 cm: (3,4,5)
24 cm: (6,8,10)
30 cm: (5,12,13)
36 cm: (9,12,15)
40 cm: (8,15,17)
48 cm: (12,16,20)
In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle.
Other lengths allow more than one solution to be found; 
for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.
120 cm: (30,40,50), (20,48,52), (24,45,51)
Given that L is the length of the wire, for how many values of L ≤ n can exactly one, integer sided right angle, triangle be formed?
*/

function singularIntRightTriangles(n) {
    let triangles = Array(n).fill(0);
    let aThird = n / 3;

    for (let i = 2; i <= aThird; i++) {
        let iSquared = i * i;

        for (let j = 1; j < i; j++) {
            let jSquared = j * j;
            let a = iSquared - jSquared;
            let b = 2 * i * j;
            let c = iSquared + jSquared;

            if (jSquared + iSquared > 2 * aThird) break;
            if (i % 2 && j % 2 || hcf(i, j) !== 1) continue;


            for (let k = 1; true; k++) {
                let perimeter = k * (a + b + c);

                if (perimeter > n) break;

                triangles[perimeter - 1]++;
            }
        }
    }

    return triangles.reduce((a, b) => a + (b === 1 ? 1 : 0), 0);
}

function hcf(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
  
    return a;
}

module.exports = { singularIntRightTriangles };