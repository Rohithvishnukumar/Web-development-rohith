// try it in browser 

const prompt=require("prompt-sync")({signit:true});


let temp = prompt("Enter your marks: ")

console.log( typeof(temp))   // prompt will be always string by default

temp = Number.parseInt(temp);
console.log(typeof(temp))