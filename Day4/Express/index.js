const express = require("express")

const app = express()

// app.use() -> middleware(works on every incoming request)
app.use(express.json())

let obj = {
    name:"avanish",
    age:22
}

app.use("/api/kuchbhi",(req,res)=>{
    res.send("hello from kuch bhi api")
})
app.get("/api/home", (req,res)=>{
    res.status(201)
    res.json(obj)
})

app.post("/api/login/:id",(req,res)=>{
    const{ query } = req.query
    console.log(query)
    const{ id } = req.params
    console.log(id)
    const{name} = req.body
    console.log(name)
    res.status(202).json("hi")
})
app.listen(8081, ()=>{
    console.log("Server connected to PORT 8081")
})