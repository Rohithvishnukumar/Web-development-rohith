import express from "express";
const app = express();
const port = 3000;

app.get("/" , function(req , res){
    console.log(req);
    console.log(req.headers);

    res.send("Hello Vishnu");
});


app.get("/about", function(req , res){

    res.send("This is an about page ...............................")
})

app.get("/contact" , (req,res) =>{
    res.send("This is our conatact page");
})



app.listen(port, function(){
    console.log("The server is live at port addr 3000");
});





// node --watch index.js  (for auto reloading the server 