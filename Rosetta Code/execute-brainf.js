/* 
Execute Brain****

Write a function to implement a Brain**** interpreter. 
The function will take a string as a parameter and should return a string as the output. 
More details are given below:
RCBF is a set of Brainf*** compilers and interpreters written for Rosetta Code in a variety of languages.
Below are links to each of the versions of RCBF.
An implementation need only properly implement the following instructions:
Command	Description
>	Move the pointer to the right
<	Move the pointer to the left
+	Increment the memory cell under the pointer
-	Decrement the memory cell under the pointer
.	Output the character signified by the cell at the pointer
,	Input a character and store it in the cell at the pointer
[	Jump past the matching ] if the cell under the pointer is 0
]	Jump back to the matching [ if the cell under the pointer is nonzero
Any cell size is allowed, EOF (End-O-File) support is optional, as is whether you have bounded or unbounded memory.
*/

function brain(prog) {
    let arr = [0];
    let pointer = 0;
    let result = "";
    let skip = false;
    let openBrackets = [];

    for (let i = 0; i < prog.length; i++) {
        let command = prog[i];

        switch (command) {
            case ">":
                pointer++;
                if (pointer >= arr.length) arr.push(0);
                break;
            case "<":
                pointer--;
                if (pointer < 0) pointer = 0;
                break;
            case "+":
                arr[pointer]++;
                break;
            case "-":
                arr[pointer]--;
                break;
            case ".":
                result += String.fromCharCode(arr[pointer]);
                break;
            case ",":
                throw new Error("Unnable to get user input.");
            case "[":
                if (arr[pointer] === 0) {
                    skip = true;
                } else {
                    openBrackets.push(i);
                }
                break;
            case "]":
                if (skip) {
                    skip = false;
                } else {
                    if (arr[pointer] === 0) {
                        openBrackets.pop();
                    } else {
                        i = openBrackets[openBrackets.length - 1];
                    }
                }
                break;
        }
    }

    return result;
}

module.exports = { brain };