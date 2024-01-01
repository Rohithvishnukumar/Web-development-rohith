let arr = [ "rohith", "vishnu" , 99 , 7 , "k",44.44 , true]

let b = arr.join("")
let c = arr.join("-")

console.log(b)
console.log(c)
console.log(arr)   // here array is not modified
console.log(typeof(b))



// toString() and join() both converts array into string but in the toString() method the output string contains commas (,) but in the join method it does not 