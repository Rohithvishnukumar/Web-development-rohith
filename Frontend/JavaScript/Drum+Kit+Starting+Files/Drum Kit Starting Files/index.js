// document.querySelector(".drum").addEventListener("click" , meth1);            // instead of writing  meth1 seperately you can use anonymous function here you should not call the method as usually like meth1() in the event listener as meth1 is a callback function

// function meth1(){
//     alert("Hello you click on me........")
// }





// you can also go With Anonymous Function insted of calling the function (best practice as you can call multi parametered functions from the anonymous functions )

// document.getElementById("rohith").addEventListener("click" , function(){
//     alert("This alert is done by Using Anonymous Function")
// })



// note that 






//---------------- to select all the queries-------------------------





let arr = document.querySelectorAll(".drum");

for (let i = 0; i < arr.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {

        // console.log("----------------" , event);
        // console.log("********" , this)
        var keyb = this.innerHTML;
        meth2(keyb);
        buttonAnimation(keyb);
    });
}



document.addEventListener("keydown", function (event) {


    // console.log("----------------" , event);
    // console.log("********" , this)
    keyb = event.key;
    meth2(keyb);
    buttonAnimation(keyb);

});





function meth2(keyb) {

    switch (keyb) {

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
            alert("Select the keys among w,a,s,d,j,k,l ")
            break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function buttonAnimation( param1 ) {

    console.log(param1);

    document.querySelector("." + param1).style.borderColor = "yellow" ;
    await sleep(200);
    document.querySelector("." + param1).style.borderColor = "#404B69" ;


}



// you can also use setTimeout(function , time in ms); for delay 









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