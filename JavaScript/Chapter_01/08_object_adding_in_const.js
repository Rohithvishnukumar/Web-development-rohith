const marks = {

    mouse : "zebronics",
    Keyboard : "dell",
    display : "Samsung",
}

marks["CPU"] = "ryzen-7"    // adding
console.log(marks)

console.log()

marks.GPU = "Nvdia RTX"   // adding
console.log(marks)

console.log()

marks["display"] = "LG"    // overrided
console.log(marks)

console.log()

marks.display = "apple"   // overrided
console.log(marks)






// if it is a const object then you cannot change the literal but you can change the key's value and also you can add some more keys to it 
