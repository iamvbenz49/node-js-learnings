const express = require("express");

const app = express();
const morgan = require("morgan")

//register view engine
app.set("view engine","ejs");

app.listen(3000);

//static middleware
app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req,res,next) => {
   console.log("new req made");
   console.log("host: "+req.path);
   console.log("host: "+req.hostname);
   console.log("method: "+req.method);
   next();
})

//home page
app.get("/", (req,res) => {
   const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
   res.render("index", { title: 'Home',blogs})
})
//about page
app.get("/about", (req,res) => {
   // res.send("<p>about page</p>");
   res.render("about", { title: 'About'})
})
app.get("/create", (req,res) => {
   res.render("create", { title: 'Create'});
})
//404 page
app.use((req,res) => {
   res.status(404).render("404", { title: 'Error'});
 })