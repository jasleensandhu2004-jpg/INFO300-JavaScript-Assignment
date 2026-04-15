// Name: Jasleen
const readlineSync = require('readline-sync');

let input = readlineSync.question("Enter a string: ");
let lowerInput = input.toLowerCase();
let counts = {};
let firstRepeat = null;
let foundRepeat = false;

// We iterate through the string to count and find the first repeat
for (let char of lowerInput) {
    if (char >= 'a' && char <= 'z') {
        if (counts[char]) {
            counts[char]++;
            if (!foundRepeat) {
                firstRepeat = char;
                foundRepeat = true;
            }
        } else {
            counts[char] = 1;
        }
    }
}

console.log("Letter frequencies:");
for (let char in counts) {
    console.log(`${char}: ${counts[char]}`);
}

console.log(`First repeated letter: ${firstRepeat}`);