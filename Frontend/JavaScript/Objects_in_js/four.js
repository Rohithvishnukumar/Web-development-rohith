// In Javascript you cannot directly declare instance variables inside the class rather you can declare variables via a Constructor or Method. Static variables can be directly declared

class example {
    constructor() {
        this.temp = "rohith";
    }
}

var e1 = new example();
console.log(e1.temp);









class exmp {
    mymethod() {
        this.laptop = "ROG";

        console.log(this.laptop)  // you cannot log only laptop
    }
}

var e2 = new exmp();
console.log(e1.laptop);
e2.mymethod();

// Methods inside the class are declared without the keyword function







class exmp2 {
    
    computer = "asus";
}

var e3 = new exmp2();
console.log(e3.computer);
console.log(typeof e3.computer);





// Static variables 


class exmp4{

    static perscom = "Personnel computer";

    static meth9(){
        console.log("this is a static method");
    }
}

let e6 = new exmp4();
console.log(exmp4.perscom);
exmp4.meth9();d
