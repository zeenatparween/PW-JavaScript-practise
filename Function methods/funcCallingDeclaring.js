// There are four method of function calling and declaring
// 1) Without Parameter without Return
// 2)with Parameter without Return
// 3)Without Parameter with Return
// 4) With Parameter with Return

// 1) Without Parameter Without Return
function writemessages(){
    console.log("Good Morning to all")
}
writemessages();
writemessages();
 
function Greeding(){
   console.log("I am happy to attend today's concern")
}
Greeding();
Greeding();

function Addition() {
    console.log( "Roll No.",5+7+8+9)
}
Addition();
Addition();


// 2) With parameter Without Return
function  Concatenate(x,y,z){
    console.log(x+y+z)
}
let result = Concatenate(5,8,4);
 
function string(x, y){
    console.log( x= 2346 ,"+", y= 7865)
}
string();

function concatenate(name, title){
    console.log(`Hello! ${name} your title is ${title}`)
}
let result2 = concatenate("zeenat", "parween")
 

//3) without Parameter Without Return

function greeding(){
    return "Hello Everyone! I am your Batchmate"
}
console.log (greeding());
console.log (greeding());


function Semester(){
    return "Are you Studing in Semester Fifth"
}
console.log(Semester())
console.log(Semester())


// 4) With parameter With Return
function arithemaric(a,b,c,d){
    let operation = (((a+b)/c)*d)%2
    return operation
}
arithemaric();
let result4 = arithemaric(7,32,45,24)
console.log(result4)

