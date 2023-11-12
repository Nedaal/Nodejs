const { response } = require("express");
const express=require("express");

const app=express();
 app.use(express.json());
//  mongodb+srv://engnedalk83:<password>@cluster0.akdtzm3.mongodb.net/?retryWrites=true&w=majority


const mongoose=require("mongoose");

const Article=require("./models/Article");
mongoose.connect("mongodb+srv://engnedalk83:orok785or@cluster0.akdtzm3.mongodb.net/?retryWrites=true&w=majority").then(

()=>{
    console.log("connected successfully");

}
).catch(()=>{
    console.log("error connecting with database");
});

app.get("/hello", function(req, res){

res.send("Hello World")


});



app.get("/test", function(req, res){

    res.send("You visited Test")
    
    
    });


    app.post("/addComment",(req,res)=>{
        res.send("You sent a comment")
    })



app.get("/testget", (req,res)=>{
let numbers="";

for(let i=0; i<=100; i++){

    numbers +=i+"--";

}

res.send(`the number that your requested is ${numbers}`)


})





app.get("/findsummation/:number1/:number2", (req,res)=>{

    const  number1=req.params.number1;
    const number2=req.params.number2;
    const sum= Number(number1) + Number(number2);
    res.send(` the Total is ${sum}`);

});



app.get("/sayhello", (req,res)=>{


    // res.send(`hello ${req.body.name}, Age is : ${req.query.age}`)

    // res.json({
    //     name:req.body.name,
    //     age:req.query.age,
    //     language:"Arabic"
    // })
 
// res.sendFile(__dirname+"/views/response.html");

res.render("response.ejs", {
    name:"Nedal"
});




});


// Create Articles

app.post("/articles", async (req,res)=>{
    const newArticle=new Article();
    newArticle.title="My first article";
    newArticle.body="This is the body";
    newArticle.numberOflikes=100;
    await newArticle.save();  

    res.send("The new Article has been created");
})



app.listen(3000,()=>{
    console.log("I am listening to port 3000");
});
