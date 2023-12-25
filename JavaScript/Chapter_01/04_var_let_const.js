// var has global scope and it can be re-declared as well as re-inialised
// let has block scope and it can be only re-initialised
// const has block scope and it cannot be neither re-declared not re-inialised

var a = 90;
let b = 34;
const c = 23;

console.log(a);
console.log(b);
console.log(c);

{
  var x = 65;
  let z = 99;
  a = 11;
  b = 12;
  // c = 13;  // you cannot do as it is a const

  console.log("--------------------Inside the block: ------------------");

  console.log(a);
  console.log(b);
  console.log(c);
  console.log("Locally created - inside with let : ", z);
  console.log("Locally created - inside with var: " , x)
}

console.log("-----------------outisde the block: ------------------");

console.log(a);
console.log(b);
console.log(c);
// console.log("Locally created - outside with let: " , z)  // this will not work as z is locally created by let
console.log("Locally created - inside with var: " , x)   // this works as it is var 


// if you edit a (var) variable even in local ie inside a block the value is changed globally 

var a = "vishnu"    // you can re-declare the variable 

// let b = "kumar"    // you cannot do this as b is declared using let

// var b = 3989;       //  you cannot use an already declared variable by any means
// let a = 3434;       //  it can be only done with a var to var re-declaration

console.log(a);










