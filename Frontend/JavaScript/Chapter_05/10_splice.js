let arr1 = [ "rohith", "vishnu" , 99 , 7 , "k",44.44 , true]

let b = arr1.splice(1,2, 5859, 994, 984 ,4920)                            // updates the array and returns deleted items
console.log(arr1);
console.log(b);


// .splice( start-index , number of deletions , values to be inserted from start index  )

// returns deleted value 