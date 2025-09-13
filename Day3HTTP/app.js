const http = require("http")
const { v4: uuid } = require('uuid');

// const server = http.createServer((req, res)=>{
//    // console.log(req)
//     if(req.url == "/api/home" && req.method == "GET")
//     {
//         res.writeHead(200, {"content-type" : "application/json"})
//         res.end("Hello world from the server")
//     }
//     else if(req.url == "/api/profile" && req.method == "GET")
//     {
//         res.writeHead(200, {"content-type" : "application/json"})
//         res.end(JSON.stringify({name:"Avanish Yadav"}))
//     }
//     else if(req.url == "/api/login" && req.method == "POST")
//     {
//         res.writeHead(200,{"content-type" : "application/json"})
//         res.end(JSON.stringify({info:"User Logged In"}))
//     }
//     else {
//         res.writeHead(400, {"content-type" : "application/json"})
//         res.end(JSON.stringify({"msg":"not found"}))
//     }
// })

let db = [
    {
        name : "Avanish",
        age : 22,
        id : uuid()
    },
    {
        name : "Ashish",
        age : 22,
        id : uuid()
    }
]

const server = http.createServer((req,res)=>{
   if(req.url == "/api/users" && req.method == "GET")
    {
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify(db))
    }
    else if(req.url == "/api/users" && req.method == "POST")
    {
      let str = ""
      req.on("data",(chunk)=>{
        str +=chunk.toString()
      })
      req.on("end",()=>{
        let parseData = JSON.parse(str)
        db.push({...parseData, id:uuid()})
        res.writeHead(200, {"content-type" : "application/json"})
        res.end("User Added Successfully")
      })
    }
    else if(req.url == "/api/users/edit" && req.method == "PATCH")
    {
        let str = ""
        req.on("data", (chunk)=>{
            str +=chunk.toString()
        })
        req.on("end",()=>{
            let parseData = JSON.parse(str)
            let id = parseData.id

            for(let item of db){
                if(item.id == id){
                    item.name = parseData.name
                    item.age = parseData.age
                }
            }
            res.writeHead(200, {"content-type" : "application/json"})
            res.end("user Updated Successfully")
        })
    }
    else if(req.url == "/api/users/delete" && req.method=="DELETE")
    {
     let str = ""
     req.on("data",(chunk)=>{
        str +=chunk.toString()
     })
     req.on("end",()=>{
        //console.log(str)
        let parseData = JSON.parse(str)
        let filteredArray = db.filter((item)=>{
            return item.id!=parseData.id
        })
        db = parseData
        res.writeHead(200, {"content-type" :"application/json"})
        res.end("User Deleted Successfully")
     })
    }
})

server.listen(8081, ()=>{
    console.log("Server connected to port 8081")
})