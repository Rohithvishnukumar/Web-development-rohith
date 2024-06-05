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

    if( day === 0 || day === 6){
        const data = {
            week : "Weekend",
            sugges:"Its time to have fun"
        }
        res.render("index.ejs" ,data  )
    }
    else{

        const data = {
            week : "Weekday",
            sugges:"Its time to work hard",
        }
        res.render("index.ejs" , data = data )
    }
    
})


app.listen(port, function(){
    console.log(`The server started at ${port}`)
})
