//console.log(process)
// console.log(process.argv)

function sum(a,b){
    console.log(a+b)
}
sum(Number(process.argv[2]), Number(process.argv[3]))