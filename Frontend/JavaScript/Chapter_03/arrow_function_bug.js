let a = 3
let b = 4

let s = add_and_exp(a,b)
console.log(s);

const add_and_exp = (x,y) => {
    let temp = x + y;
    let fin = temp ** y;

    console.log("function executed");
    return fin
}


// while using arrow function the function must be always defined first before calling. you cannot call the function before defining in the sequence

// but if you use normal function we can call the function before defining in the sequence