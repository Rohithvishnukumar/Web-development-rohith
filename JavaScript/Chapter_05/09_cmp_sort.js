let arr2 = [2,41,6,36,5,76,5,73,6,34,57,8]

arr2.sort(compare)   // you ca also use any name instead of compare

function compare(a,b){
    return a-b      // in a.o
}

function compare_(a,b){
    return b-a      // in d.o
}

console.log(arr2)



// --------------------------------------------------------------


let arr = [ "rohith", "vishnu" , 99 , 7 , "k",44.44 , false , true]

arr.sort(vishnu)

function vishnu(a,b) {
    return b-a
}

console.log(arr)

