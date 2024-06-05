import express from "express"
import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000;
const app = express();


app.use(rohith)     // never call a middleware like rohith()

function rohith(req, res, next){
    console.log( "URL: " , req.url);
    console.log( "Route handler: " , req.method);
    next();
}


app.get("/" , function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/subm" , function(req , res){

    let temp = req.body;
    console.log(temp.textr);
    return res.redirect("/" )
})

app.listen(port, function(){
    console.log("server started");
})