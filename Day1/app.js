//  var figlet = require("figlet")
//import figlet from "figlet";
// const chalk = require("chalk")
//  import { getRandomCat } from "random-cat-img";

// import figlet from "figlet";
// import chalk from "chalk";
// import catme from "cat-me"


// console.log(catme('nyan'))

// figlet("Hello Avanish Yadav!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
  // console.log(data);
//   console.log(chalk.yellow(data));
// });

// const { getRandomCat } = require("random-cat-img");

// (async () => {
//   const data = await getRandomCat();
//   console.log(data.message);
// })();




// const cowsay = require("cowsay");
// import Cowsay from "cowsay"
// console.log(Cowsay.say({
//     text : "Learing Nodejs",
//     e : "👀",
//     T : "👅 "
// }));


const fs = require("fs")   // file system

//Synchronous Way

// const data = fs.readFileSync("./randomText.txt", { encoding : "utf-8" })
// const data = fs.writeFileSync("./randomText.txt","Hello this is gabbar")
// console.log(data)
// const data1 = fs.appendFileSync("./randomText.txt","\nThis is data 2")
// const data2 = fs.unlinkSync("./randomText.txt")
// console.log(data2)


//Asynchronous Way

// const data = fs.readFile("./ok.txt","utf-8",(err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// fs.writeFile("./ok.txt","\nHello",(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log("DONE")
// })

// fs.appendFile("./ok.txt","\nAur sb badiya",(err)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log("Done")
// })

fs.unlink("./ok.txt",(err)=>{
  if(err){
    console.log(err)
    return
  }
  console.log("DOne")
})