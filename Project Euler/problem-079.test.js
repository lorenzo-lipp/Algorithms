const { passcodeDerivation } = require("./problem-079");
const fs = require("fs");

const keylog = JSON.parse(fs.readFileSync("./problem-079.test.json"));

describe("Testing problem 79: passcode derivation", () => {
    it("should return a number", () => {
        expect(typeof passcodeDerivation(keylog)).toBe("number");
    });

    it("should return 73162890 when input keylog array", () => {
        expect(passcodeDerivation(keylog)).toBe(73162890);
    });
});