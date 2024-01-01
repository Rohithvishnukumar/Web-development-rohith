let arr = [ "rohith", "vishnu" , 99 , 7 , "k",44.44 , true]

// for(let i = 0; i < arr.length; ++i){
//     console.log(arr[i]);
// }

for (val in arr){
    console.log(val)
}

for (val of arr){
    console.log(val)
}