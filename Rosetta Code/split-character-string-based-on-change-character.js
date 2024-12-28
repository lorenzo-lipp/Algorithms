/* 
Split a character string based on change of character

Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right). 
Blanks should be treated as any other character (except they are problematic to display clearly). 
The same applies to commas. For instance, the string: "gHHH5YY++///\\"
should be split as: ["g", "HHH", "5", "YY", "++", "///", "\\" ];
*/

/**
 * Splits a character string based on change of character
 * @param {string} str 
 * @returns 
 */
function split(str) {
    let arr = [];
    let strPiece = "";
    let lastChar = str[0];

    for (let char of str) {
        if (char === lastChar) {
            strPiece += char;
        } else {
            arr.push(strPiece);
            lastChar = strPiece = char;
        }
    }

    arr.push(strPiece);

    return arr;
}

module.exports = { split };