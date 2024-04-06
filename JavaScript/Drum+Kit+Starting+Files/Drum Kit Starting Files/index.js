// document.querySelector(".drum").addEventListener("click" , meth1);            // instead of writing  meth1 seperately you can use anonymous function

// function meth1(){
//     alert("Hello you click on me........")
// }





// With Anonymous Function

// document.getElementById("rohith").addEventListener("click" , function(){
//     alert("This alert is done by Using Anonymous Function")
// })








//---------------- to select all the queries-------------------------

let a = document.querySelectorAll(".drum");


for (let i = 0; i < a.length; i++) {

    var letter = document.querySelectorAll(".drum")[i].addEventListener("click", meth2);


}

function meth2() {

    var key = this.innerHTML;

    console.log(key);

    switch (key) {

        case "w":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;

        case "a":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;

        case "s":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;

        case "d":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;

        case "j":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;

        case "k":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;

        case "l":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;


        default:
            alert("Nothing is selected")
            break;
    }







}



//------------------------------------ using for-each loop------------------------------------

// let b = document.querySelectorAll(".drum");

// b.forEach(function (temp){
//     temp.addEventListener("click", meth3)
// });

// function meth3(){
//     alert("helloooooooooooooooooo")
// }




// ----------- you can also use get elements by class  or you can also use getElementById---------------------

// document.getElementsByClassName("drum")[1].addEventListener("click" , meth1);



























// Note that if you add two event listeners for a same element then both of them will be executed