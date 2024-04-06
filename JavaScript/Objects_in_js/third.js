class Waiters {
     
    constructor(name, empid, age, languages) {
        this.name = name;
        this.empid = empid;
        this.age = age;
        this.languages = languages;
    }
}

var w1 = new Waiters("John", 2024001 ,24, ["English", "telugu"]);
var w2 = new Waiters("Raju", 2024002 ,54, ["English", "Hindi"]);

console.log(w1);
console.log(w1.name);
console.log(typeof w1);






// In Javascript you cannot directly declare instance variables inside the class rather you can declare variables via a Constructor or Method. Static variables can be directly declared



class example{

    constructor(){
        this.temp = "rohith";
    }
}

class exmp{

    mymethod(){
        this.laptop = "ROG";
    }
}


// Methods inside the class are declared without the keyword function