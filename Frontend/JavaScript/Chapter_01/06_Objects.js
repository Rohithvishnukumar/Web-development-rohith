// these are similar to dictionary in python

const names = {

    "rohith" : 34 ,
    "vishnu" : BigInt("6566") ,
    kumar : "Youtuber",
    ROG : Symbol("Gamers"),
    "rvk" : undefined,
    "asus" : null
}

console.log(names)
console.log( names["rohith"] )
console.log( names["kumar"] )


// here the key may or may not be in the "" its upto users wish, but when you are accessing the value through the key you need to access by using "" 

// always the parameter inside (name["------"]) must be in ""



// you can also access the value by: 

console.log( names.kumar)