/* 
Problem 59: XOR decryption

Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.
A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. 
The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; 
for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.
For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. 
The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.
Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. 
If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. 
The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.
Your task has been made easy, as the encryption key consists of three lower case characters. 
Using cipher, an array containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.
*/

function XORDecryption(arr) {
    let commonWords = ["which", "shorter", "example"];
    
    for (let firstKey = 97; firstKey <= 122; firstKey++) {
        for (let secondKey = 97; secondKey <= 122; secondKey++) {
            for (let thirdKey = 97; thirdKey <= 122; thirdKey++) {
                let word = "";
                let key = [firstKey, secondKey, thirdKey];
                let cycle = 0;
                let acc = 0;
                let isDecrypted = false;

                for (let byte of arr) {
                    let char = key[cycle] ^ byte;
                    acc += char;
                    cycle = (cycle + 1) % 3;

                    if (char === 32) word = "";
                    else word += String.fromCharCode(char);

                    if (!isDecrypted && commonWords.includes(word)) isDecrypted = true;
                }

                if (isDecrypted) {
                    return acc;
                }
            }
        }
    }

    return null;
}

module.exports = { XORDecryption };