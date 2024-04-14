const prompt=require("prompt-sync")({signit:true});
let val = prompt("Enter your name: ")

let temp = val[0]
temp = temp.toUpperCase();
val = val.slice(1);
val = temp + val;

console.log(`Welcome, ${val}`)