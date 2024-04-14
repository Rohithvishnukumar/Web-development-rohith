function mean(a, b, c, d,e) {

    fin = (a + b + c + d + e)/5
    console.log(fin)
}


const prompt = require("prompt-sync")({ signit: true });

let temp1 = prompt("Enter the value-1:  ")
let temp2 = prompt("Enter the value-2:  ")
let temp3 = prompt("Enter the value-3:  ")
let temp4 = prompt("Enter the value-4:  ")
let temp5 = prompt("Enter the value-5:  ")

temp1 = Number.parseInt(temp1)  
temp2 = Number.parseInt(temp2)
temp3 = Number.parseInt(temp3)
temp4 = Number.parseInt(temp4)
temp5 = Number.parseInt(temp5)


mean(temp1, temp2, temp3, temp4, temp5)

