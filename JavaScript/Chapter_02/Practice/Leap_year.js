const prompt=require("prompt-sync")({signit:true});

const yearin = prompt("Enter the year to fnd out if it is a leap year or not: ")

function leap(year){

    if(year % 4 != 0){
        console.log("not a leap year");
    }

    else if(year % 100 !=0 ){
        console.log("leap");
    }

    else if( year % 400 == 0 ){

        console.log("Leap year");
    }

    else{
        console.log("not a leap");
    }

}

leap(yearin)




// given year is a leap year if:

// 1) it is not divisible by 4 it is not a leap year 
// 2) if it is divisible by 4 and it is not divisible by 100 it is leap year
// 3) if it is divisible by 4 and 100 and not divisible by 400 it is not a leap year