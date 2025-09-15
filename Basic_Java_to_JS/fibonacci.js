const limit=parseInt(process.argv[2])

if(isNaN(limit) || limit<=0){
    console.log("Please provide a valid positive number as limit")
    process.exit(1)
}
let a=0,b=1
console.log("Fibonacci Series upto "+limit+" :")
while(a<=limit){
    console.log(a)
    let next =a+b
    a=b;
    b=next;
}