import express from "express";
const app = express();
const port = 3000;

app.listen(port , function(){
    console.log("The server is live at the port 3000");
})