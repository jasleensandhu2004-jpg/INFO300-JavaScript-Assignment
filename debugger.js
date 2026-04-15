// Name: Jasleen
const readlineSync = require('readline-sync');

// Fixed: used parseInt to ensure the input is a number so addition/loops work correctly
let start = parseInt(readlineSync.question("Enter start number: "));
// Fixed: used parseInt to ensure the end range is treated as a number in the comparison
let end = parseInt(readlineSync.question("Enter end number: "));

let count = 0;

for (let i = start; i <= end; i++) {
    // Fixed: incorrect operator; changed (i / 2 == 0) to (i % 2 == 0) to check for even remainder
    if (i % 2 == 0) {
        // Fixed: incorrect operator; changed =+ to += to correctly increment the count
        count += 1;
    }
}
