const obj = {

    nam : "Rohith",
    place : "Kurnool",
    "country" : "america",
    [1] : "australia",
    ["2"] : "europe",
    ["1"] : "India",
    1 : "rog"
    
};

console.log(obj.nam );
console.log(obj[1] );
console.log(obj["1"] );
console.log(obj[2] );
console.log(obj["2"] );
console.log(obj.country);
console.log(obj["country"] );   // this is not allowed console.log(obj[country]);


console.log("-------------------------------------");

// console.log(obj."2");     // you cannot access [] with . operator 

// console.log(obj[nam]);   // you cannot access normal keys with [] 






//   ["something"] is same as [something]
//  something is different from [something]

// "something" is the only thing which can be accessed with both . as well as []