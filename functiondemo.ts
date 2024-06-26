function cube(a):number{
    return a*a*a;
}

function printmsg():void{
    console.log("hello student")
}

let number=2
let ans1:number=cube(number)
console.log(ans1)
printmsg()

function add(a:number,b:number):number{
    return a+b;
}

let sum=add(10,20)
console.log(sum)


function addition(a:number,b:number,c:number):number{
    return a+b+(c||0);
}
console.log(addition(10,20,20))

function findpower(base,pow:number=2):number{
    return base**pow;
}

console.log("power:",findpower(10,3))