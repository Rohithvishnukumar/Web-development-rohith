const prompt=require("prompt-sync")({signit:true});

let temp = prompt("ENTER A NUMBER: ")

if( temp % 2 == 0 && temp % 3 == 0){
    console.log("The entered number is divisible!!! ")
}
else{
    console.log("The entered number is not divisible!!! ")
}