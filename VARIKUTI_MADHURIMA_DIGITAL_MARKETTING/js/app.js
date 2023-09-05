const express=require("express");
const port=process.env.port || 5000;
const app = express();


//API MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

//API ROUTES
app.get('/form',(req,res) =>{
    res.sendFile(__filename+"/index.html");
    
})


app.post("/formPost",(req,res)=>{
console.log(req.body);
res.sendFile(__dirname+"/js/thanks.html");


})

app.listen(port,()=> {
console.log("server started at http://localhost:${port}")
});