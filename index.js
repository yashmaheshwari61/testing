const express = require('express');
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static("static"));

app.set("view engine","ejs");

app.get("/", function(req, res, next) {
    res.send("Hi, This is my first node server");
});

app.get("/first", function(req, res, next) {
  if(req.query.greeting == 1){
    res.send("Hi, This is second route");
  }
  else{
    res.send("Bye from the second route");
  }
    res.send("Hi, This is my first node server, first page");
});

app.get("/second", function(req, res, next) {
    res.send("Hi, This is my first node server, second page");
});

app.post("/query", function(req, res, next) {
    //res.send(Math.random() + " " + JSON.stringify(req.body));
    if(! req.body.username){
      res.send("Username field is empty");
      return;
    }
    if(! req.body.password){
      res.send("Password field is empty");
      return;
    }
    res.send("Your username is "+req.body.username+" and password is "+req.body.password);
});

app.get("/random", function(req,res,next) {
  res.send(""+Math.floor(Math.random()*1000000));
});

app.get("/third",function(req,res,next){
  if(req.query.q=="node"){
    res.render("test1",
    {
      title: "NodeJS",
      topic:"Node EJS Template Engine",
      status:1,
      fruits: ["apple","banana","orange"],
      error: {code:0, msg: "no error"}
    });
  }
  else if(req.query.q=="python"){
    res.render("test1",
    {
      title: "Python",
      topic:"Intro to Python",
      status:0,
      fruits: ["peach","watermelon","litchi","grapes"],
      error: {code:1, msg: "not started"}
    });
  }
  else{
    res.render("test1",
    {
      title: "No Title",
      topic:"No topic",
      status:2,
      fruits: [],
      error: {code:2, msg: "topic not found"}
    });
  }
});

app.listen(3000);
