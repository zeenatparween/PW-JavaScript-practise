//   CALLBACK HELL FUNCTION 
// function calculate(action, x, y){
//     if(action === "divide"){
//         return x/y
//     }
//     else if ( action === "multiply"){
//         return x * y
//     }
// }
// console.log(calculate('divide' ,30,2))
// console.log(calculate('multiply' ,56,3))

// FUNCTION2
// function calculate(action, x, y){
//     if(action === "divide"){
//         return x/y
//     }
//     else if ( action === "multiply"){
//         return x * y
//     }
//     else if(action === "add"){
//         return x + y
//     }
//     else if (action === "modulus"){
//         return x%y
//     }
// }
// console.log(calculate('divide' ,30,2))
// console.log(calculate('multiply' ,56,3))
// console.log(calculate('add' ,103,709))
// console.log(calculate('modulus' ,468,5))



// WE CAN WRITE  CODE BETTER WAY AS ABOVE
// function divide(x,y){
//     return x/y
// }
// function multiply(x,y){
//     return x*y
// }
// function calculate(callBack , x,y){
//     return callBack(x,y)
// }
// console.log(calculate(divide, 20,7))
// console.log(calculate(multiply, 10,5))

// function2
// function divide(x,y){
//     return x/y
// }
// function multiply(x,y){
//     return x*y
// }
// function add(x,y){
//     return x+y
// }
// function modulus(x,y){
//     return x%y
// }
// function calculate(callBack , x,y){
//     return callBack(x,y)
// }
// console.log(calculate(divide, 20,7))
// console.log(calculate(multiply, 10,5))
// console.log(calculate(add, 20,59))
// console.log(calculate(modulus, 768,5))


// const button = document.querySelector('btn')
// let display(){
//     console.log("hello world")
// }
// button.addEventListener('click', display)

const arr = [2,4,6,8]
const largeNum = num => num > 3

console.log(arr.filter(largeNum)) 