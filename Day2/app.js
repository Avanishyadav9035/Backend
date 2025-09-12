const fs = require("fs")
const fs2 = require("fs/promises")

// fs.rmdirSync("./ok")
// console.log("ok")
// fs.rmdir("./OK", (err) => {
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log("Dir Deleted")
// })

// const data = fs.readFileSync("./a.txt", { encoding : "utf-8"})
// console.log(data)
// fs.writeFileSync("./a.txt","")
// fs.writeFileSync("./b.txt", data)

fs.readFile("./b.txt","utf-8",(err, data) => {
    if(err){
        console.loo(err)
        return
    }
    fs.writeFile("./a.txt", data,(err)=>{
        if(err){
            console.log(err)
            return
        }
    fs.writeFile("./b.txt", " ", (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Done")
    })
    })
})