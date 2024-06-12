let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("this is pr1");
        resolve("pr1 is resolved")
    }, 2000);
});

let soe = promise1.then(function (value) {
    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("this is pr2");
            resolve("pr2 is resolved")
            // reject("rejected 2")
            // reject(new Error("some error"))
        }, 2000);
    });
    return promise2;
})


soe.then(function (value) {
    console.log("Lets seee--------------------------------------" , value);
    return 33;
}).then(function (value) {
    console.log(value);
});



// you need to return if you write in .then 











// if you write directly like this reject("rejected 2") you will get uncaught error in the browser
// if you raise an error like reject(new Error("rohith error")) you will get an error
