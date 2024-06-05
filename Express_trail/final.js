import express from "express"
import bodypar from "body-parser"

import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000

import ejs from "ejs"

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.use(bodypar.urlencoded({extended: true}));

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/public/index.html")

})

app.post("/resu" ,function(req , res){
    console.log(req.body); 
    const textr = req.body.textr;
    const passr = req.body.passr;

    res.render("results" , {textr , passr});
    res.sendFile(__dirname + "/public/results.html")
})

    

app.listen(port, function(){
    console.log("The Server is Started");
})