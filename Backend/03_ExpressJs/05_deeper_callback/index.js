import express from "express";
import bodypar from "body-parser"

import {dirname} from "path"
import {fileURLToPath} from "url"
import exp from "constants";
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000;
const app = express();

app.use(bodypar.urlencoded( {extended : true} ))

app.get("/" , function(req,res ,zssz){

    console.log("this is a call before the func call")
    console.log("this is a call AFTER the func call")
    return res.send( "Local Test 001 @ port 3000")

});

app.listen(port, ()=>{
    console.log("server started");
})