const { anagramicSquares } = require("./problem-098");
const fs = require("fs");

const testWords1 = [
    "DAMAGE","DANGER","DANGEROUS","DARK","DATA","DATE","DAUGHTER","DAY","DEAD","DEAL","DEATH","DEBATE","DEBT","DECADE","DECIDE",
    "DECISION","DECLARE","DEEP","DEFENCE","DEFENDANT","DEFINE","DEFINITION","DEGREE","DELIVER","DEMAND","DEMOCRATIC","DEMONSTRATE",
    "DENY","DEPARTMENT","DEPEND","DEPUTY","DERIVE","DESCRIBE","DESCRIPTION","DESIGN","DESIRE","DESK","DESPITE","DESTROY","DETAIL",
    "DETAILED","DETERMINE","DEVELOP","DEVELOPMENT","DEVICE","DIE","DIFFERENCE","DIFFERENT","DIFFICULT","DIFFICULTY","DINNER","DIRECT",
    "DIRECTION","DIRECTLY","DIRECTOR","DISAPPEAR","DISCIPLINE","DISCOVER","DISCUSS","DISCUSSION","DISEASE","DISPLAY","DISTANCE","DISTINCTION",
    "DISTRIBUTION","DISTRICT","DIVIDE","DIVISION","DO","DOCTOR","DOCUMENT","DOG","DOMESTIC","DOOR","DOUBLE","DOUBT","DOWN","DRAW","DRAWING",
    "DREAM","DRESS","DRINK","DRIVE","DRIVER","DROP","DRUG","DRY","DUE","DURING","DUTY","LABOUR","LACK","LADY","LAND","LANGUAGE","LARGE",
    "LARGELY","LAST","LATE","LATER","LATTER","LAUGH","LAUNCH","LAW","LAWYER","LAY","LEAD","LEADER","LEADERSHIP","LEADING","LEAF","LEAGUE",
    "LEAN","LEARN","LEAST","LEAVE","LEFT","LEG","LEGAL","LEGISLATION","LENGTH","LESS","LET","LETTER","LEVEL","LIABILITY","LIBERAL","LIBRARY",
    "LIE","LIFE","LIFT","LIGHT","LIKE","LIKELY","LIMIT","LIMITED","LINE","LINK","LIP","LIST","LISTEN","LITERATURE","LITTLE","LIVE","LIVING",
    "LOAN","LOCAL","LOCATION","LONG","LOOK","LORD","LOSE","LOSS","LOT","LOVE","LOVELY","LOW","LUNCH"
];
const testWords2 = JSON.parse(fs.readFileSync("./problem-098.test.json"));

describe("Testing problem 98: anagramic squares", () => {
    it("should return a number", () => {
        expect(typeof anagramicSquares(["CARE", "RACE"])).toBe("number");
    });

    it("should return 9216 when input [\"CARE\", \"RACE\"]", () => {
        expect(anagramicSquares(["CARE", "RACE"])).toBe(9216);
    });

    it("should return 4761 when input testWords1", () => {
        expect(anagramicSquares(testWords1)).toBe(4761);
    });

    it("should return 18769 when input testWords2", () => {
        expect(anagramicSquares(testWords2)).toBe(18769);
    });
});