// var gen = require('sillyname');   // common Js
import rovis  from "sillyname";     // Ecmascript modules
var na = rovis();

console.log(`My name is ${na}`)               // if you change the type then you need to strictly write the js code in slected type only otherwise node throws an error




// var vis = require("superheroes");
import vis from "superheroes";

console.log(`The name of the super hero is ${vis.all} `);
console.log(`The name of the super hero is ${vis.random()} `);