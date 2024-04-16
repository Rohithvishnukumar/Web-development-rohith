// these are similar to dictionary in python

const temp = "clock";

const names = {

    "rohith" : 34 ,
    "vishnu" : BigInt("6566") ,
    kumar : "Youtuber",
    ROG : Symbol("Gamers"),
    "rvk" : undefined,
    "asus" : null,
    [temp] : "time",
    
}

console.log(names)
console.log( names["rohith"] )
console.log( names["kumar"] )
console.log(names[temp])
console.log(names["clock"])


// here the key may or may not be in the "" its upto users wish, but when you are accessing the value through the key you need to access by using "" 

// always the parameter inside (name["------"]) must be in ""



// you can also access the value by: 

console.log( names.kumar)





let some = "rohith";

const a = {
    vishnu : "good",
    "kumar" : "bad",
    ["rvk"] : "something",
    [some] : "you are a temp"
}

console.log();

console.log(a.vishnu)
console.log(a.kumar)
console.log(a.rvk)
console.log(a.some)
console.log(a.rohith)

console.log()

console.log(a["vishnu"]  )
console.log(a["kumar"] )
console.log(a["rvk"] )
console.log(a["some"],  a[some])
console.log(a["rohith"])
