// Passing a function inside an another function as a param are called as higher order functions



function add( num1 , num2){
    return num1 + num2;
}

function mul( num1 , num2){
    return num1 * num2;
}

function calc( num1 , num2 , oper){
    return oper(num1 , num2)
}

console.log(calc(2,3,add));