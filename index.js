const exp = require("express");
const app = exp();

const ejs = require("ejs");
app.set("view engine","ejs");

app.use(exp.static("public"));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/companies",function(req,res){
    res.render("companies");
});

app.get("/about",function(req,res){
    res.render("ABout");
});

app.get("/statistics",function(req,res){
    res.render("statistics");
});

app.listen(8000, function(){
    console.log("server started on port 8000");
});

