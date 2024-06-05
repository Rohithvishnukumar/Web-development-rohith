import express from "express";
const app = new express();
let port = 3000; 


app.get("/" , function(request , response){
    response.send(" <h1> This is built by Rohith Vishnu 000 </h1>");
});

app.post("/about" , function(req , res){
    // do something with data
    res.sendStatus(201);
});

app.put("/users/vishnu" , function(req , res){
    // code for updating the data
    res.sendStatus(200);
});

app.patch("/users/vishnu" , function(req ,res){
    // code for patching up the data
    res.sendStatus(200);
});

app.delete("/users/vishnu" , function(req ,res){
    // code for deleting the data
    res.sendStatus(200);
});




app.listen(port , function(){
    console.log(`The server is live at port ${port}`);
})
