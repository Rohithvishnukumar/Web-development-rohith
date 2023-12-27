let students = {
    rohith: 78,
    gowthami: 100,
    vishnu: 76,
    keerthi: 34,
    aakash: 65,
    rishra: 55
}

let temp = Object.keys(students)
console.log(temp);

for (let i = 0; i < temp.length; ++i) {

    console.log(temp[i] + " ----- " + students[temp[i]])
}


// ------------------ USING FOR IN LOOP------------

// for( let a in students){
//     console.log(a + " -- " + students[a])
// }