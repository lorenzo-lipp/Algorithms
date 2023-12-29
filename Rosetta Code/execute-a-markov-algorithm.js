/* 
Execute a Markov algorithm

Markov Concepts are used in machine learning, because of its simple approach in data manipulation. 
With a set number of rules you can manipulate given data to create a desired output.
We have added in the background:
The rules in the form of nested array, and the data in the form of array, too.
And the desired outputs.
The rules:
let rules=[
    [
        "A -> apple","B -> bag","S -> shop","T -> the",
        "the shop -> my brother","a never used -> .terminating rule"
    ],

    [
        "A -> apple","B -> bag","S -> .shop","T -> the",
        "the shop -> my brother","a never used -> .terminating rule"
    ],

    [
        "A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag",
        "->.* -> money","W -> WW","S -> .shop","T -> the",
        "the shop -> my brother","a never used -> .terminating rule"
    ],

    [
        "_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX",
        "X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y",
        "1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "
    ],

    [
        "A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11",
        "B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"
    ]
];

The data:
let data=[
    "I bought a B of As from T S.",
    "I bought a B of As from T S.",
    "I bought a B of As W my Bgage from T S.",
    "_1111*11111_",
    "000000A000000"
];

The outputs:
let outputs=[
    "I bought a bag of apples from my brother.",
    "I bought a bag of apples from T shop.",
    "I bought a bag of apples with my money from T shop.",
    "11111111111111111111",
    "00011H1111000"
];
Using Markov Algorithm, change the data into the desired outputs using the rules provided for you.
*/

function markov(rules, data) {
    let rulesMap = new Map();
    let isDone = false;

    for (let str of rules) {
        let [rule, output] = str.split(" -> ");

        rulesMap.set(rule, output);
    }

    while (!isDone) {
        isDone = true;

        for (let rule of rulesMap.keys()) {
            let output = rulesMap.get(rule);
            let isFinal = output[0] === ".";

            if (isFinal) output = output.slice(1);

            let newStr = data.replace(rule, output);

            if (newStr !== data) {
                data = newStr;
                isDone = isFinal;
                break;
            }
        }
    }

    return data;
}

module.exports = { markov };