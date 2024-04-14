const prompt = require("prompt-sync")({ signit: true });

let temp = prompt("Enter your name: ");

switch (temp) {

    case ("rohith"):
        console.log("you are eligible rohith");
        break;

    case ("vishnu"):
        console.log("you are not eligible vishnu");
        break;

    case ("kumar"):
        console.log("you are eligible kumar")
        break;

    default:
        console.log("This is a default condition")
}
