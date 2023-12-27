let a = 3
let b = 4

let add_and_exp = (x,y) => {   // const and var can also be used
    let temp = x + y;
    let fin = temp ** y;

    console.log("function executed");
    return fin
}

let s = add_and_exp(a,b)
console.log(s);


// Arrow function without any parameters

const display = () => {
    console.log("This is a display function ")
}

display();


