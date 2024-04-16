const names = {
    rohith: 90,
    gowthami: 100,
    vishnu: 23,
    uday: 78,
    harika: 35,  
    rishra: 65  
}

for( let temp in names){
    console.log(temp + "-------" + names[temp] )
}

console.log();

for(temp in names){
    console.log(temp + "--------" , names.temp );    // this does not work 
}

// for-in loop is used to loop through the keys of an object