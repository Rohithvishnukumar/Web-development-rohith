const prompt = require("prompt-sync")({ signit: true });

let val = prompt("Enter a value upto which you want to print sequence:  ")

let a = 0, b = 1
console.log(a, b);

for (i = 0; i < val - 2; ++i) {

    let c = a + b
    a = b
    b = c
    process.stdout.write( `      ${c}, `);
}

