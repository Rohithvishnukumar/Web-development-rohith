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




