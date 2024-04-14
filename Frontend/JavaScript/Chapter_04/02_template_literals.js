//  here we use backtick(``)
//In template literals we can use both single quote and double quote inside a string


let p = " 'Samsung' makes Smart-phones"    
let q = ' "Samsung" makes Smart-phones '    

console.log(p);
console.log(q);

// let r = " "Samsung" makes Smart-phones ";     // these are not allowed
// let s = ' 'Samsung' makes Smart-phones ';

let templit = `"Samsung" and 'Apple' makes Smart-phones`
console.log(templit);





// If you want to write single quote inside single quote or double quote inside double qoute JavaScript confuses upto where it need to take the string, if you still want to use then go with escape sequence characters