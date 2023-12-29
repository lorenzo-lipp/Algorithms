let { markov } = require("./execute-a-markov-algorithm");

let rulesSet = [
    ["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
    ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
    ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
    ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
    ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]
]

let inputSet = [
    "I bought a B of As from T S.",
    "I bought a B of As from T S.",
    "I bought a B of As W my Bgage from T S.",
    "_1111*11111_",
    "000000A000000"
]

let outputSet = [
    "I bought a bag of apples from my brother.",
    "I bought a bag of apples from T shop.",
    "I bought a bag of apples with my money from T shop.",
    "11111111111111111111",
    "00011H1111000"
]

describe("Testing markov", () => {
    it("should be a function", () => {
        expect(typeof markov).toBe("function");
    });

    it("should return outputSet[0] when rules=rulesSet[0], data=inputSet[0]", () => {
        expect(markov(rulesSet[0], inputSet[0])).toBe(outputSet[0]);
    });

    it("should return outputSet[1] when rules=rulesSet[1], data=inputSet[1]", () => {
        expect(markov(rulesSet[1], inputSet[1])).toBe(outputSet[1]);
    });

    it("should return outputSet[2] when rules=rulesSet[2], data=inputSet[2]", () => {
        expect(markov(rulesSet[2], inputSet[2])).toBe(outputSet[2]);
    });

    it("should return outputSet[3] when rules=rulesSet[3], data=inputSet[3]", () => {
        expect(markov(rulesSet[3], inputSet[3])).toBe(outputSet[3]);
    });

    it("should return outputSet[4] when rules=rulesSet[4], data=inputSet[4]", () => {
        expect(markov(rulesSet[4], inputSet[4])).toBe(outputSet[4]);
    });
});