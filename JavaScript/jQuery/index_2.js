$("h1").text("Hola");  // this is used to change text inside

$(".roh").html("<a href = 'https://www.google.com' >This is an anchor tag</a>");  // this is used to change innerHTML (if there is no element it first adds, if there is an element then it modifies it )

$(".roh").html("<a href = 'https://www.instagram.com' >This is an anchor tag</a>"); 






// jQuery to change the attributes

$("img").attr("src" , "https://shorturl.at/ivAKU");  // setting the attribute

console.log( $("img").attr("alt"));    // getting the attribute 