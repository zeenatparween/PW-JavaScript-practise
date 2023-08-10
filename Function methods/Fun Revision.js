   // function
 function sayHello(){
    console.log("Hello World");
    console.log("Hello again")
 }
//  sayHello();
//  console.log("Something");
//  sayHello();

 function addTwoNumbers(num1, num2){
    let result = num1 + num2
    // console.log(result)
    return result
    
  
 }
 const result = addTwoNumbers(4,8)
 console.log(result)

 function SubTwoNum(num1,num2){
    let result = num1 + num2
    return  result
 }
 let Subtract = SubTwoNum(30,10)
 console.log(Subtract)

 // Taking username from the User
 function pwlogin(username){
    if(!username) {
        return "please Provide a username!"
    }
    return username + 'is logged in'
 }
 console.log(pwlogin("shagufta"))

 // Adding number by taking  from user

 function cartsum(...numbers){
    // get a variable
    let total = 0
    // loop through all values
    for(const num of numbers){
         // add each value to total
        total+= num
    }
   return total
 }
 console.log(cartsum(4,7,2,4,1,4,5,3))

 const user = {
    id:1,
    name: "hitesh",
    email: "hitesh@pw.live"
 }
 function addUserToOb(obj){
    console.log(`User name is ${obj.name}`)
 }
 function learnThis(){
    console.log(this)
 }
 