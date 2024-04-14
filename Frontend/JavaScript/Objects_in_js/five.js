// for type 1 object creation



// const wait2 = {
//     name: "raju",
//     empid: 2024001,
//     Age: 32,
//     languages: ["english", "telugu", "german"],
//     work: mymeth()
// }

// function mymeth() {
//     console.log("Suitcase is Moving........");
// }

// console.log(wait2);








// const wait3 = {

//     name: "raju",
//     empid: 2024001,
//     Age: 32,
//     languages: ["english", "telugu", "german"],
//     work: function () {
//         console.log("anonymously working......")
//         // return "vishnu";    // you may get undefined when return is not provided
//     }

// }


// console.log(wait3);
// console.log(wait3.work());


// here "work" is the name of the function












// For constructor function object creation

function Waiters(name, empid, age, languages) {

    this.name = name;
    this.empid = empid;
    this.age = age;
    this.languages = languages;
    this.work = function () {
        console.log("hello javascript.......");
    }
}

var obj = new Waiters('Tharun', 2024005, 55, ["English", "telugu"]);

console.log(obj);
console.log(obj.work());




























// For class and constructor way of making objects


class Worker {

    constructor(name, empid, age, languages) {
        this.name = name;
        this.empid = empid;
        this.age = age;
        this.languages = languages;
        this.work = function () {
            console.log("hello .......");
        }
    }
}


var w9 = new Worker("vijay", 2024008 , 34 , ['Telugu']);

console.log(w9);
console.log(w9.work());