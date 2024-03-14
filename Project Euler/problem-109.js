/* 
Problem 109: Darts

In the game of darts a player throws three darts at a target board which is split into twenty equal sized sections numbered one to twenty.
[https://cdn.freecodecamp.org/curriculum/project-euler/darts.png]
The score of a dart is determined by the number of the region that the dart lands in. 
A dart landing outside the red/green outer ring scores zero. 
The black and cream regions inside this ring represent single scores. 
However, the red/green outer ring and middle ring score double and treble scores respectively.
At the center of the board are two concentric circles called the bull region, or bulls-eye. 
The outer bull is worth 25 points and the inner bull is a double, worth 50 points.
There are many variations of rules but in the most popular game the players will begin with a score of 301 or 501 and the first player to reduce their running total to zero is a winner. 
However, it is normal to play a "doubles out" system, which means that the player must land a double (including the double bulls-eye at the center of the board) on their final dart to win;
any other dart that would reduce their running total to one or lower means the score for that set of three darts is "bust".
When a player is able to finish on their current score it is called a "checkout" and the highest checkout is 170: T20 T20 D25 (two treble 20s and double bull). 
There are exactly eleven distinct ways to checkout on a score of 6:
D3
D1 D2
S2 D2
D2 D1
S4 D1
S1 S1 D2
S1 T1 D1
S1 S3 D1
D1 D1 D1
D1 S2 D1
S2 S2 D1
Note that D1 D2 is considered different from D2 D1 as they finish on different doubles. 
However, the combination S1 T1 D1 is considered the same as T1 S1 D1. 
In addition, we shall not include misses in considering combinations; 
for example, D3 is the same as 0 D3 and 0 0 D3. Incredibly there are 42336 distinct ways of checking out in total. 
How many distinct ways can a player checkout with a score less than 100?
*/

function darts(maxScore=100) {
    return getAllCheckouts(maxScore).length;
}

function getAllCheckouts(maxScore) {
    let singles = Array(20).fill().map((_, i) => new Dart("S" + (i + 1), i + 1));
    let doubles = Array(20).fill().map((_, i) => new Dart("D" + (i + 1), 2 * i + 2));
    let trebles = Array(20).fill().map((_, i) => new Dart("T" + (i + 1), 3 * i + 3));

    singles.push(new Dart("S25", 25));
    doubles.push(new Dart("D25", 50));

    let allDarts = singles.concat(doubles, trebles);
    let solutions = [];
    let combinations = allDarts.filter(d => d.value < maxScore).map(v => [v]);

    for (let double of doubles) if (double.value < maxScore) solutions.push([double]);

    for (let foundNone = false; !foundNone && combinations[0].length < 3;) {
        let combinationsFound = [];
        foundNone = true;

        for (let combination of combinations) {
            let sum = combination.reduce((a, b) => a + b.value, 0);
            let lastDart = combination[combination.length - 1];

            for (let dart of allDarts) {
                if (dart.value + sum < maxScore) {
                    let newCombination = [...combination, dart];

                    if (dart.isDouble()) solutions.push(newCombination);
                    if (dart.isGreater(lastDart)) combinationsFound.push(newCombination);
    
                    foundNone = false;
                }
            }
        }

        combinations = combinationsFound;
    }

    return solutions;
}

class Dart {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    isSingle() { return this.name[0] === "S"; }
    isDouble() { return this.name[0] === "D"; }
    isTreble() { return this.name[0] === "T"; }
    isGreater(otherDart) {
        return this.value > otherDart.value || (
            this.value === otherDart.value && 
            (this.name === otherDart.name || otherDart.isSingle() && this.isDouble() || otherDart.isSingle() && this.isTreble() || otherDart.isDouble() && this.isTreble())
     );
    }
}

module.exports = { darts };