// Basic syntax for promise  (run all the promises in browser )



// A Promise in JavaScript represents a value that may not be available yet but will be resolved at some point in the future or it might get rejected. It’s a way to handle asynchronous operations without blocking the rest of your code.

// Asynchronous operations in JavaScript are operations that allow the JavaScript engine to continue executing other parts of your code while waiting for these operations to complete. They are used for tasks that take a significant amount of time to complete, such as network requests, reading or writing to the file system, database operations, or timers.


let promise = new Promise(function(resolve , reject){
    // alert("this is a promise")
    resolve(99)
    console.log("this is a logger in promise");
    console.log(promise);
})