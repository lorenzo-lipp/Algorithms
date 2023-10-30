/* 
Problem 54: Poker hands

In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). 
But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); 
if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:
Hand	Player 1	                                        Player 2	                                        Winner
1	    5H 5C 6S 7S KD Pair of Fives	                    2C 3S 8S 8D TD Pair of Eights	                    Player 2
2	    5D 8C 9S JS AC Highest card Ace	                    2C 5C 7D 8S QH Highest card Queen	                Player 1
3	    2D 9C AS AH AC Three Aces	                        3D 6D 7D TD QD Flush with Diamonds	                Player 2
4	    4D 6S 9H QH QC Pair of Queens Highest card Nine	    3D 6D 7H QD QS Pair of Queens Highest card Seven	Player 1
5	    2H 2D 4C 4D 4S Full House with Three Fours	        3C 3D 3S 9S 9D Full House with Three Threes	        Player 1
The global array (handsArr) passed to the function, contains one-thousand random hands dealt to two players. 
Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. 
You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.
How many hands does Player 1 win?
*/

function pokerHands(arr) {
    let count = 0;

    for (let hand of arr) {
        if (whoWins(hand) === 1) count++;
    }

    return count;
}

function whoWins(hand) {
    let cards = hand.split(" ");
    let playerOne = Array(5).fill().map((_, i) => convertCard(cards[i]));
    let playerTwo = Array(5).fill().map((_, i) => convertCard(cards[i + 5]));
    let royalFlush = [isRoyalFlush(playerOne), isRoyalFlush(playerTwo)];
    let straightFlush = [isStraightFlush(playerOne), isStraightFlush(playerTwo)];
    let fourOfAKind = [getFourOfAKind(playerOne), getFourOfAKind(playerTwo)];
    let fullHouse = [isFullHouse(playerOne), isFullHouse(playerTwo)];
    let flush = [isFlush(playerOne), isFlush(playerTwo)];
    let straight = [isStraight(playerOne), isStraight(playerTwo)];
    let threeOfAKind = [getThreeOfAKind(playerOne), getThreeOfAKind(playerTwo)];
    let twoPairs = [getTwoPairs(playerOne), getTwoPairs(playerTwo)];
    let onePair = [getOnePair(playerOne), getOnePair(playerTwo)];
    let playerOneHigh = isHighCard(playerOne, playerTwo);
    let scores = [0, 0];

    if (royalFlush[0]) scores[0] += 10 ** 10;
    if (royalFlush[1]) scores[1] += 10 ** 10;
    if (straightFlush[0]) scores[0] += 10 ** 9;
    if (straightFlush[1]) scores[1] += 10 ** 9;
    if (fourOfAKind[0] > fourOfAKind[1]) scores[0] += 10 ** 8;
    if (fourOfAKind[1] > fourOfAKind[0]) scores[1] += 10 ** 8;
    if (fullHouse[0]) scores[0] += 10 ** 7;
    if (fullHouse[1]) scores[1] += 10 ** 7;
    if (flush[0]) scores[0] += 10 ** 6;
    if (flush[1]) scores[1] += 10 ** 6;
    if (straight[0]) scores[0] += 10 ** 5;
    if (straight[1]) scores[1] += 10 ** 5;
    if (threeOfAKind[0] > threeOfAKind[1]) scores[0] += 10 ** 4;
    if (threeOfAKind[1] > threeOfAKind[0]) scores[1] += 10 ** 4;
    if (twoPairs[0] > twoPairs[1]) scores[0] += 10 ** 3;
    if (twoPairs[1] > twoPairs[0]) scores[1] += 10 ** 3;
    if (onePair[0] > onePair[1]) scores[0] += 10 ** 2;
    if (onePair[1] > onePair[0]) scores[1] += 10 ** 2;
    if (playerOneHigh) scores[0] += 10;
    else scores[1] += 10;

    return scores[0] > scores[1] ? 1 : 2;
}

function convertCard(card) {
    let converted = { suit: card[1] };

    switch (card[0]) {
        case "A": converted.value = 14; break;
        case "K": converted.value = 13; break;
        case "Q": converted.value = 12; break;
        case "J": converted.value = 11; break;
        case "T": converted.value = 10; break;
        default: converted.value = +card[0]; break;
    }

    return converted
}

function isRoyalFlush(cards) {
    let suit = cards[0].suit;

    for (let card of cards) {
        if (card.value < 10 || card.suit !== suit) return false;
    }

    return true;
}

function isStraightFlush(cards) {
    return isStraight(cards) && isFlush(cards);
}

function getFourOfAKind(cards) {
    for (let i = 0; i < 2; i++) {
        let sameValueCards = 1;

        for (let j = 0; j < 5; j++) {
            if (j === i) continue;

            if (cards[i].value === cards[j].value) sameValueCards++;
        }

        if (sameValueCards === 4) return cards[i].value;
    }

    return 0;
}

function isFullHouse(cards) {
    let hasThreeOfAKind = false;
    let hasPair = false;

    for (let i = 0; i < 5; i++) {
        let sameValueCards = 1;

        for (let j = 0; j < 5; j++) {
            if (j === i) continue;

            if (cards[i].value === cards[j].value) sameValueCards++;
        }

        if (sameValueCards === 2) hasPair = true;
        else if (sameValueCards === 3) hasThreeOfAKind = true;
    }

    return hasPair && hasThreeOfAKind;
}

function isFlush(cards) {
    let suit = cards[0].suit;

    return cards.every(card => card.suit === suit);
}

function isStraight(cards) {
    let sortedCards = cards.sort((a, b) => a.value - b.value);

    for (let i = 1; i < 5; i++) {
        if (sortedCards[i].value - sortedCards[i - 1].value !== 1) return false;
    }

    return true;
}

function getThreeOfAKind(cards) {
    for (let i = 0; i < 5; i++) {
        let sameValueCards = 1;

        for (let j = 0; j < 5; j++) {
            if (j === i) continue;

            if (cards[i].value === cards[j].value) sameValueCards++;
        }

        if (sameValueCards === 3) return cards[i].value;
    }

    return 0;
}

function getTwoPairs(cards) {
    let pair = 0;

    for (let i = 0; i < 5; i++) {
        let sameValueCards = 1;

        for (let j = i + 1; j < 5; j++) {
            if (cards[i].value === cards[j].value) sameValueCards++;
        }

        if (sameValueCards === 2) {
            if (pair) return Math.max(pair, cards[i].value);
            pair = cards[i].value;
        }
    }

    return 0;
}

function getOnePair(cards) {
    for (let i = 0; i < 5; i++) {
        let sameValueCards = 1;

        for (let j = i + 1; j < 5; j++) {
            if (cards[i].value === cards[j].value) sameValueCards++;
        }

        if (sameValueCards === 2) return cards[i].value;
    }

    return 0;
}

function isHighCard(playerOne, playerTwo) {
    let sortedCardsOne = playerOne.sort((a, b) => a.value - b.value);
    let sortedCardsTwo = playerTwo.sort((a, b) => a.value - b.value);

    for (let i = 4; i >= 0; i--) {
        if (sortedCardsOne[i].value > sortedCardsTwo[i].value) return true;
        else if (sortedCardsOne[i].value < sortedCardsTwo[i].value) return false;
    }

    return false;
}

module.exports = { pokerHands };