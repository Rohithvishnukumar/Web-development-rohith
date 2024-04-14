const prompt=require("prompt-sync")({signit:true});

let temp = prompt("Enter your age: ")

if( temp >= 10 && temp <= 20){
    console.log("You are eligible")
}

else{
    console.log("You are not eligible")
}