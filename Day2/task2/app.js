const fs = require("fs")

const command = process.argv[2]
const fileName = process.argv[3]
const data = process.argv[4] || ""

// console.log(command, fileName, data)

if(command.toLowerCase() == "write"){
    try {
          if(!data || !fileName){
        console.log("Please enter valid data and file name")
        return
    }
    fs.writeFileSync(fileName, data)
    } catch (error) {
         console.log(error)
    }
}
else if(command.toLowerCase() == "read"){
    try {
          if(!fileName){
        console.log("Please enter a valid filename")
        return
    }
    console.log(fs.readFileSync(fileName , "utf-8"))
    } catch (error) {
         console.log(error)
    }
}
else if(command.toLowerCase() == "update"){
   try {
     if(!data || !fileName){
        console.log("Please enter a valid data and filename")
        return
    }
    fs.appendFileSync(fileName, "\n" + data)
   } catch (error) {
     console.log(error)
   }
}
else if(command.toLowerCase() == "delete"){
   try {
     if(!fileName){
        console.log("Please enter valid file name")
        return
    }
    fs.unlinkSync(fileName)
   } catch (error) {
       console.log(error)
   }
}

console.log("important code")