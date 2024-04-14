

// document.querySelector("h1").style.backgroundColor = "white";          // normal way of styling (note backgroundColor not background-color )

// document.querySelector(".roh").classList.add("g");



// in jQuery we do by 

$("h1").css("background-color" , "green");            //  css("property" , "value")  sets the property with the respective value
   
console.log($("h1").css("background-color"));    // css("property") gets the property's value

$(".roh").addClass("g");

$(".roh").removeClass("g");

console.log($(".roh").hasClass("g"));

// $(".roh , h1").css("background-color" , "yellow");    // works like normal css selectors (all chaining , grouping , descendants will work as usual )

$("div p").css("background-color" , "yellow");  