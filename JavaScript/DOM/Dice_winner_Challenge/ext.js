// function rolldice() {


  let roll1 = Math.round(Math.random() * 6) + 1;
  let roll2 = Math.round(Math.random() * 6) + 1;

  if (roll1 == 1) {
    document.getElementById("leftimg").src = "dice1.png";

    // document.getElementById("leftimg").innerHTML = ' <img src="dice1.png" alt="dice">  ' ;
  }

  if (roll1 == 2) {
    // document.querySelector("#leftimg").getAttribute("src") = "dice2.png" ;

    document.getElementById("leftimg").src = "dice2.png";
  }

  if (roll1 == 3) {
    document.getElementById("leftimg").src = "dice3.png";
  }

  if (roll1 == 4) {
    document.getElementById("leftimg").src = "dice4.png";
  }

  if (roll1 == 5) {
    document.getElementById("leftimg").src = "dice5.png";
  }

  if (roll1 == 6) {
    document.getElementById("leftimg").src = "dice6.png";
  }







  if (roll2 == 1) {
    document.getElementById("rightimg").src = "dice1.png";
  }

  if (roll2 == 2) {
    document.getElementById("rightimg").src = "dice2.png";
  }

  if (roll2 == 3) {
    document.getElementById("rightimg").src = "dice3.png";
  }

  if (roll2 == 4) {
    document.getElementById("rightimg").src = "dice4.png";
  }

  if (roll2 == 5) {
    document.getElementById("rightimg").src = "dice5.png";
  }

  if (roll2 == 6) {
    document.getElementById("rightimg").src = "dice6.png";
  }



  if( roll1 > roll2 ){
    document.getElementById("heading").innerHTML = "Person 1 wins" ;
  }

  if( roll2 > roll1 ){
    document.getElementById("heading").innerHTML = "Person 2 wins" ;
  }




// }
