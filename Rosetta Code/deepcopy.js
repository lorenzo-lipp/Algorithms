/* 
Deepcopy

Write a function that returns a deep copy of a given object. The copy must not be the same object that was given.
This task will not test for:
Objects with properties that are functions
Date objects or object with properties that are Date objects
RegEx or object with properties that are RegEx objects
Prototype copying
*/

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = { deepcopy };