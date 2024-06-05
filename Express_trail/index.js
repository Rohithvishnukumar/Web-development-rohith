import some from "express";
import bodypar from "body-parser"

import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000;
const app = some();

app.use(bodypar.urlencoded( {extended : true} ))


app.get("/" , function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/subm" , function(req , res){

    let temp = req.body;
    console.log(temp.textr);
    return res.redirect("/" )
})




app.listen(port, function(){
    console.log(`The node server is running on the port ${port}`)
})
