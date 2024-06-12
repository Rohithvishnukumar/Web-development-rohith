// async always returns a promise 

async function rohith(){
    
    return 5
}

rohith().then(function(){
    console.log("if this is working with .then , it is a promise");
})

let pr = new Promise(function(resolve,reject){

    resolve(33)
    // reject(new Error("errorooooo"))
})

pr.then((value)=>{
console.log(value);
console.log(pr);
})

// await only works in async functions only.await literally stops the execution of the program and waits untill the promise is settled and the control return backs 