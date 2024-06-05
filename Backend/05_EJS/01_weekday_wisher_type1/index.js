import express from "express"
import bodypar from "body-parser"

import {dirname} from "path"
import {fileURLToPath} from "url"
import exp from "constants"
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000
const app = express();

app.use(bodypar.urlencoded({extended : true}));


app.get("/" , function(req,res){
    
    const d = new Date();
    let day = d.getDay();

    if( day == 0 || day == 6){
        res.sendFile(__dirname + '/public/weekend.html')
    }
    else{
        res.sendFile(__dirname + "/public/weekday.html")
    }
    
})


app.listen(port, function(){
    console.log(`The server started at ${port}`)
})
