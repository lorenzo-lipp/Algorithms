/* 
Problem 84: Monopoly odds

In the game, Monopoly, the standard board is set up in the following way:
GO	A1	CC1	A2	T1	R1	B1	CH1	B2	B3	JAIL
H2	 	                                C1
T2	 	                                U1
H1	 	                                C2
CH3	 	                                C3
R4	 	                                R2
G3	 	                                D1
CC3	 	                                CC2
G2	 	                                D2
G1	 	                                D3
G2J	F3	U2	F2	F1	R3	E3	E2	CH2	E1	FP
A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction.
Without any further rules we would expect to visit each square with equal probability: 2.5%. 
However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.
In addition to G2J, and one card from each of CC and CH, that orders the player to go directly to jail, if a player rolls three consecutive doubles, they do not advance the result of their 3rd roll. 
Instead they proceed directly to jail.
At the beginning of the game, the CC and CH cards are shuffled. 
When a player lands on CC or CH they take a card from the top of the respective pile and, after following the instructions, it is returned to the bottom of the pile. 
There are sixteen cards in each pile, but for the purpose of this problem we are only concerned with cards that order a movement; 
any instruction not concerned with movement will be ignored and the player will remain on the CC/CH square.
Community Chest (2/16 cards):
    Advance to GO
    Go to JAIL
Chance (10/16 cards):
    Advance to GO
    Go to JAIL
    Go to C1
    Go to E3
    Go to H2
    Go to R1
    Go to next R (railway company)
    Go to next R
    Go to next U (utility company)
    Go back 3 squares.
The heart of this problem concerns the likelihood of visiting a particular square. 
That is, the probability of finishing at that square after a roll. 
For this reason it should be clear that, with the exception of G2J for which the probability of finishing on it is zero, the CH squares will have the lowest probabilities, as 5/8 request a movement to another square, and it is the final square that the player finishes at on each roll that we are interested in. 
We shall make no distinction between "Just Visiting" and being sent to JAIL, and we shall also ignore the rule about requiring a double to "get out of jail", assuming that they pay to get out on their next turn.
By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.
Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. 
So these three most popular squares can be listed with the six-digit modal string 102400.
If, instead of using two 6-sided dice, two n-sided dice are used, find the six-digit modal string.
*/

function monopolyOdds(diceSides) {
    const GO = 0;
    const R1 = 5;
    const JAIL = 10;
    const C1 = 11;
    const E3 = 24;
    const GO_TO_JAIL = 30;
    const H2 = 39;
    const board = Array(40).fill(0);
    const throwDice = () => Math.floor(Math.random() * diceSides) + 1;
    let chanceCard = 0;
    let communityCard = 0;
    let doublesInARow = 0;
    let pos = 0;

    for (let play = 0; play < 1000000; play++) {
        let roll1 = throwDice();
        let roll2 = throwDice();

        if (roll1 === roll2) doublesInARow++;
        else doublesInARow = 0;

        if (doublesInARow === 3) { // If three doubles in a row, go to jail;
            board[JAIL]++;
            doublesInARow = 0;
            continue;
        }

        let newPos = normalize(pos + roll1 + roll2);

        if (isChance(newPos)) {
            let card = chanceCard;
            chanceCard = ++chanceCard % 16;

            if (card === 6) newPos = GO;
            else if (card === 7) newPos = JAIL;
            else if (card === 8) newPos = C1;
            else if (card === 9) newPos = E3;
            else if (card === 10) newPos = H2;
            else if (card === 11) newPos = R1;
            else if (card === 12 || card === 13) newPos = nextRail(newPos);
            else if (card === 14) newPos = nextUtility(newPos);
            else if (card === 15) {
                newPos = normalize(newPos - 3);

                if (isCommunityChest(newPos)) {
                    let card2 = communityCard;
                    communityCard = ++communityCard % 16;
    
                    if (card2 === 1) newPos = GO;
                    else if (card2 === 2) newPos = JAIL;
                }
            }
        } else if (isCommunityChest(newPos)) {
            let card = communityCard;
            communityCard = ++communityCard % 16;

            if (card === 1) newPos = GO;
            else if (card === 2) newPos = JAIL;
        } else if (newPos === GO_TO_JAIL) {
            newPos = JAIL;
        }

        board[newPos]++;
        pos = newPos;
    }

    let result = "";
    let boardCopy = [...board];
    boardCopy.sort((a, b) => b - a);

    for (let i = 0; i < 3; i++) {
        result += board.indexOf(boardCopy[i]).toString().padStart(2, "0");
    }

    return result;
}

function normalize(pos) {
    return (40 + pos) % 40;
}

function nextRail(pos) {
    if (pos < 5 || pos > 35) return 5;
    if (pos < 15) return 15;
    if (pos < 25) return 25;
    return 35;
}

function nextUtility(pos) {
    if (pos < 12 || pos > 28) return 12;
    return 28;
}

function isCommunityChest(pos) {
    return pos === 2 || pos === 17 || pos === 33;
}

function isChance(pos) {
    return pos === 7 || pos === 22 || pos === 36;
}

module.exports = { monopolyOdds };