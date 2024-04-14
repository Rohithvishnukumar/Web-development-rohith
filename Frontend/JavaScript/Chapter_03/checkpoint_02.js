function rohith() {
    return "vishnu"
}

function rohith() {
    return "kumar"
}

console.log(rohith())



// if the function name is same then the last declared function is used 


const add = (a,b) => {
    console.log(a + b)
}

const add = (a,b) => {
    console.log(a * b)
}

add(1,2)

// here it is not possible to redeclare as const is used 
