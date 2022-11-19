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
    res.render("about");
});

app.get("/statistics",function(req,res){
    res.render("statistics");
});

app.get("/company1",function(req,res){
    res.render("company1");
});

app.get("/comany2",function(req,res){
    res.render("comany2");
});

app.get("/company3",function(req,res){
    res.render("company3");
});

app.get("/company4",function(req,res){
    res.render("company4");
});

app.get("/company5",function(req,res){
    res.render("company5");
});

app.get("/company6",function(req,res){
    res.render("company6");
});

app.get("/company7",function(req,res){
    res.render("company7");
});

app.get("/company8",function(req,res){
    res.render("company8");
});

app.get("/company9",function(req,res){
    res.render("company9");
});

app.listen(8000, function(){
    console.log("server started on port 8000");
});

