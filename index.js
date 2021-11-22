const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.write("<h1>welome from the server</h1>")
    res.send();
});
app.get("/json",(req,res)=>{
    res.json([{id:1,
    name:"sudheer"},
{id:2,
name:"sid"}]);
});
app.get("/header",(req,res)=>
{
    
})
app.listen(port,()=>{
    console.log(`listening the port ${port}`);
});