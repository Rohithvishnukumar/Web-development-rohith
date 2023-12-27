// String in JavaScript is immutable


let stri = "Rohith Vishnu Kumar Vishnu"
let str2 = "Hello"
let str3 = "       Rohith Vishnu   Kumar       "

console.log(stri.length)     // 1 gives length

let temp = stri.toUpperCase()   //2
console.log(temp);

console.log(stri.toLowerCase())   //3 

console.log(stri.slice(2,9))  //4  right bound not included

console.log(stri.slice(2));  // 5   given index to end of the string 

let somevar = stri.replace("Vishnu", "Samsung")    //6   replaces the first occurance of the string 
console.log(somevar);

let somevar2 = str2.concat(stri)  //7   ypu can also use str2 + stri
console.log(somevar2);

console.log(s = str3.trim())  //8 removes while spaces in the string before and after only not in between the string 
console.log(s.length)


// Strings can be accessed via indices

console.log(stri[0])
