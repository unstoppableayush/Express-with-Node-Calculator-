const express=require("express");
const bodyParser = require("body-parser");
const { log } = require("console");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname); -> Shows current directory path
});

app.get("/bmiCalc" , function(req , res){
    res.sendFile(__dirname + "/bmiCalc.html");
  
});

app.post("/", function(req , res){

    // console.log(req.body);

    var num1 = Number(req.body.num1); //string to number
    var num2 = Number(req.body.num2);
    var result= num1 + num2;
    res.send("Result = "+ result);
});

app.post("/bmiCalc" ,function(req , res){
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var result = weight / height * height;

    res.send("Your BMI is "+result);

});

app.listen(3000 , function(){
    console.log("server is running on port 3000");
});
