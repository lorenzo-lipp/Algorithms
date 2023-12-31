/* 
Babbage problem

Charles Babbage, looking ahead to the sorts of problems his Analytical Engine would be able to solve, gave this example:
What is the smallest positive integer whose square ends in the digits 269,696?
Babbage, letter to Lord Bowden, 1837; see Hollingdale and Tootill, Electronic Computers, second edition, 1970, p. 125.
He thought the answer might be 99,736, whose square is 9,947,269,696; but he couldn't be certain.
The task is to find out if Babbage had the right answer.
Implement a function to return the lowest integer that satisfies the Babbage problem. If Babbage was right, return Babbage's number.
*/

function babbage(babbageNum, endDigits) {
    let smallerNum = null;
    let endSize = 10 ** Math.floor(Math.log10(endDigits) + 1);

    for (let i = babbageNum; i > 1; i--) {
        if ((i ** 2) % endSize === endDigits) {
            smallerNum = i;
        }
    }
    
    return smallerNum;
}

module.exports = { babbage };