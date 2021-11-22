const express=require('express');
const app=express();
const port=8000;
const path=require('path');

const staticpath=path.join(__dirname,'/htcs');
app.use(express.static(staticpath));
app.get("/about",(req,res)=>
{
    res.send("this is our about");
    
})
app.listen(port,()=>{
    console.log(`listening the port ${port}`);
});