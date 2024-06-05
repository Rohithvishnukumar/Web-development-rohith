import express from "express";

const app = express();
const port = 3000;

app.use(function(req,res,next){                // custom Middleware
  console.log(req.url);
  console.log(req.method);
  next();                                     // always use next as it stops the website from infinite loading (although you can get the logs executed but the browser strucks and doesn not know where to go )
})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
