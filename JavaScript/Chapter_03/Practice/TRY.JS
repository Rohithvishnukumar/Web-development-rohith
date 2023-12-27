function tryit() {
    let a = prompt("enter the correct guess: ");

    if (a == num) {
        console.log("You guessed it correctly: ", a);
        return 0;
    }

    console.log("Try again")

    tryit();
}


const prompt = require("prompt-sync")({ signit: true });
let num = 79;
tryit();




