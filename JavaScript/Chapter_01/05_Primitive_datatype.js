// js is a dynamically typed language so there is no need to declare the datatype in the compile-time

let a = null
let b = 565
let c = "Rohith"
let d = Symbol("I am a Symbol");
let e = true
let f = BigInt("99")
let g = undefined     // or let g ; can also be written for undefined without any initilisation

console.log(a ,b,c,d,e,f,g)


let sum = BigInt("1") + BigInt("3")
console.log(sum)

//you can get the type with this typeof operator 

console.log( typeof(a) )    
console.log( typeof(b) )
console.log( typeof(c) )
console.log( typeof(d) )
console.log( typeof(e) )
console.log( typeof(f) )
console.log( typeof(g) )
