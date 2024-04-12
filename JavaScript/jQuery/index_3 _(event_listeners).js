$(".vis").click( function(){                             
    $(".vis").css("font-size" , "100px")
});


$(".inpele").keypress(function(event_ro){

    console.log(event_ro)
    $(".vis").text(event_ro.key)
});     



// if you want to select entire document you can write as $("body") or $(document)



// on can also be used for all type of events

$(".vis").on("mouseover" , function(){

    $(".vis").css("background-color" , "white") 
});