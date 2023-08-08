function h(x,fn){
    // h-> is a hof
    // fn-> callback
    console.log(x*x)
    fn(10,20,30);
}
// let callback = h(20, function fn(){
//     console.log("i am callback function")
// })

function Add(x,y,z){
    addition = x+y+z;
    console.log(addition)
}

let againCallback = h(10, Add)


// settimer and settimeout is a Asynchronous language (doesn't excuted line by line)
// setTimeout(function mult(){
//     console.log("Multiplication of 6 and 16 is" , 6*12)
// },1000)

//Example2
console.log("start");
setTimeout( function fn(){
    console.log("timer done")
},2000)

console.log("end")
for(let i=0; i< 100000; i++){}