let promise1 = new Promise( function(resolve, reject){
    setTimeout(function(){
        // console.log("pr1")
        resolve("pr1 resolved")
    },2000)
})

let promise2 = new Promise( function(resolve, reject){
    setTimeout(function(){
        // console.log("pr2")
        resolve("pr2 resolved")
    },1000)
})

let promise3 = new Promise( function(resolve, reject){
    setTimeout(function(){
        // console.log("pr3")
        resolve("pr3 resolved")
    },4000)
})

// promise1.then(function(){
//     return promise2.then(function(){
//         return promise3.then(function(value){
//             console.log(value);
//             return value
//         })
//     })
// })

// the above written code is a manual code 

// using Proimise API

// let prom_all = Promise.all([promise1,promise2,promise3])  //  waits for all promises to be resolved if error occurs in any promise this wont be executed. this returns an array
// let prom = Promise.allSettled([promise1,promise2,promise3])  // waits for all promises to settle and returns their status
// let prom = Promise.race([promise1,promise2,promise3])  // give the promise which settles first (not resolves)
// let prom = Promise.any([promise1,promise2,promise3])   // gives the promise which fullfills/ resolve (not settles)
let



prom.then(function(value){
    console.log(value);
})

// prom_all.then(function(value){
//     console.log(value[2]);
// })