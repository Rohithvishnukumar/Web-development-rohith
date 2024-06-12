let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("this is from promoise 1");
        resolve("prom1 resolved")
    }, 3000)
})

promise.then(function(value){
    console.log("--------" + value);
})

promise.then(function(value){
    console.log("************" + value)
})



// In JavaScript Promises, you can do chaining by .then or .catch methods. This is useful when you want to perform multiple operations in sequence, where each operation depends on the result of the previous one.  -- this is called chaining

// We can also attach individual multiple handlers to perform the code individually by each handler (these do pass the result like chaining rather process it independently )