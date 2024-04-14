function vishnu(){
    return "hi"
}

function vishnu( val){
    return  val + "kumar"
}

console.log(vishnu())
console.log(vishnu("rohith"))


// if you call vishnu even without param then also it is calling the 2nd function that is why it is printing undefinedkumar

// javascript does not support method overloading