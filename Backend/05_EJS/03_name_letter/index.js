import express from "express"
import bodyParser from "body-parser"

import {dirname} from "path"
import {fileURLToPath} from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended : true}))   


app.get("/" , (req,res) => {
    res.render("index.ejs")
})

app.post("/", (req,res)=>{
    
    let data = req.body.text;
    let len = data.length;
    res.render("index.ejs", {num : len} )
    
})


app.listen(port, () =>{
    console.log(`server has started on port : ${port} `);
})
