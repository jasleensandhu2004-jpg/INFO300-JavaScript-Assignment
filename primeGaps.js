// Name: Jasleen
const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("User enters the number: "));

function findPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}

let primes = findPrimes(n);
console.log(`Program displays the primes up to ${n}: [${primes.join(', ')}]`);

if (primes.length >= 2) {
    let maxGap = 0;
    let p1 = 0;
    let p2 = 0;
    let totalGap = 0;

    for (let i = 0; i < primes.length - 1; i++) {
        let gap = primes[i + 1] - primes[i];
        totalGap += gap;
        // Using > (not >=) ensures that in a tie, we keep the first occurrence
        if (gap > maxGap) {
            maxGap = gap;
            p1 = primes[i];
            p2 = primes[i + 1];
        }
    }

    let avgGap = totalGap / (primes.length - 1);
    console.log(`The largest gap is ${maxGap}, between ${p1} and ${p2}`);
    console.log(`The average gap is ${avgGap.toFixed(2)}`);
}