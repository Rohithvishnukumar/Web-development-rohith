const prompt=require("prompt-sync")({signit:true});

let val = prompt("Enter your tweet: ")

console.log(`your tweet contains ${val.length} with remaining ${500 - val.length}`)
