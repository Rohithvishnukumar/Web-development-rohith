function dummy() {
  return 33;
}

let promise1 = new Promise(function (resolve, reject) {
  let value = dummy();
  if (value) {
    resolve("this is resolved prom1");
  } else {
    reject(new Error("there is an error prom1"));
  }
});

let promise2 = new Promise(function (resolve, reject) {
  let value = null;
  if (value) {
    resolve("this is resolved prom2");
  } else {
    reject(new Error("there is an error prom2"));
  }
});

promise1.then(function (value) {
  console.log(value);
});

promise1.catch(function (reason) {
  console.log(reason);
});

promise2.then(function (value) {
  console.log(value);
});

promise2.catch(function (reason) {
  console.log(reason);
});
