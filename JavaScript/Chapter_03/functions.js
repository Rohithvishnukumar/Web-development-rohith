let a = 3
let b = 4

let s = add_and_exp(a,b)
console.log(s);

function add_and_exp(x, y) {     // this function is adding the values and exponentiating with y

    let temp = x + y;
    let fin = temp ** y;

    console.log("function executed");
    return fin
}




// inclusion of return statement in the code is upto user
// you can also create functions without any arguments

