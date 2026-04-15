// Name: Jasleen
const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Prompt the user for the number of Fibonacci numbers to generate: "));

let sequence = [];
if (n > 0) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

console.log(`Full sequence: [${sequence.join(', ')}]`);

let oddFibs = [];
for (let num of sequence) {
    if (num % 2 !== 0) {
        oddFibs.push(num);
    }
}

console.log(`Odd Fibonacci numbers: [${oddFibs.join(', ')}]`);