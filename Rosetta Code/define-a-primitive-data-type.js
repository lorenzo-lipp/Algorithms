/* 
Define a primitive data type

Define a type that behaves like an integer but has a lowest valid value of 1 and a highest valid value of 10.
Error handling:
If you try to instantiate a Num with a value outside of 1 - 10, it should throw a TypeError with an error message of 'Out of range'.
If you try to instantiate a Num with a value that is not a number, it should throw a TypeError with an error message of 'Not a Number'. 
*/

class Num {
    constructor(val) {
        if (val < 1 || val > 10) throw new TypeError("Out of range");
        if (isNaN(val)) throw new TypeError("Not a Number");

        this.value = +val;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return String(this.value);
    }
}

module.exports = { Num };