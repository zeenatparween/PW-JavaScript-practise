//  CallBack , Returning Function, SETTING TIME (Setinterval , SetTimeOut)

//    CALLBACK
// const powerTwo = (n) => {
//     return n**2
// }
// function powerCube(powerTwo , n){
//     return powerTwo(n)*n
// }
// console.log(powerCube(powerTwo ,3));

// function sayHello(){
//     return () => {
//         console.log("Hello");
//     }
// }

// const higherOrder = n =>{
//     const oneFun = m => {
//         const twoFun = p => {
//             return m+n+p
//         }
//         return twoFun
//     }
//     return oneFun
// }
// console.log(higherOrder(20) (30)(50))

    // const myNums = [2,4,6,7,8]
// const sumArray = arr => {
//     let total = 0
//     arr.array.forEach(element => {
//         total += element
//     });
//     return total
// }
// console.log(sumArray(myNums));

// function OneMoreHello(){
//     console.log("Hello Everyone !")
// }
// setInterval(OneMoreHello , 1000)

//  CALLBACK FUNCTION
  // function greeting(name){
  //   console.log(`Hello, ${name}`);
  // }

  // function processInput (callback){
  //   const name = "Tell me about yourself"
  //   callback(name);
  // }
  // processInput(greeting);

  // function hiFunction(name, callback){
  //   console.log('Hi'+ '' + name + 'I am the actual function');
  //   callback();
  // }
  // callback fuction
  // function examplefunction (){
  //   console.log('I come from the callback function');
  // }
  // passing function as an arguments
  // hiFunction('folks' , examplefunction)

// CALLBACK HELL
// getproducts(18, (user) => {
//   console.log("get products" , user);
//   getUserInfo(user.username, (name) =>{
//     console.log(name);
//     getAddress(name, (item) => {
//       console.log(item);
//       // this goes on and on
//     })
//   })
// })

// RETURNING FUNCTION 
//   function multiplyBy7() {
//    return function(x) { 
//      return x * 7;
//     }
//    }
//  const  changevalue = multiplyBy7();
//  console.log(changevalue(25));

// function makeAdder (n1){
//   return function(n2) {
//     return n1 + n2;
//   }
// }
// console.log(makeAdder (5) (3));

