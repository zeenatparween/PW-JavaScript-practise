// EVERY FUNCTION
// given array
// let arr1 = ["PW Skills" , "HTML", "CSS", "JavaScript"];
// // Apply every method
// let result = arr1.every((curr) => typeof curr == "string")
// // print the result controls
// console.log(result);

// let arr2 = ["HTML" ,34 ,"CSS", 56, 78 ,"Bootstrap"]
// let result1 = arr2.every((current) => typeof current == "string", "number") 
// console.log(result1 )


// FIND FUNCTION
// check "javascript" is present in an element or not

// let teckStack = ["HTML", "CSS", "JavaScript", "NodeJS" , "React JS"];
// let result3 = teckStack.find((el) => el == "JavaScript");
// result3 ? console.log('The Element is present in the tecStack') : console.log('The Element is not present in the tecStack')

// let ShopList = ["Macro", "Ovan", "Cornflour", "Avocado", "Dry-Fruits", "Refrigretor"]
// let result4 =  ShopList.find((elem) => elem == "Avocado")
// result4 ? console.log('Avocado is present in your List') : console.log('Avocado is missing from your List') ;

// COMPARE FUNCTION
// function compareFunc(a,b){
//     if(a < b){
//         return -1
//     }
//     if (a > b){
//         return 1
//     }
//     else {
//         return 0
//     }
// }  
// console.log(compareFunc(-4 , 6))

// Compare Function2
// function compareFunction(a,b,c,d){
//     if(a > b && c < d){
//         return "Element are same"
//     }
//     else{
//         return "Element are not same"
//     }
// }
// console.log(compareFunction(6,8,4,3))



//  SORT FUNCTION 
// String Order
// let names = ["Anurag", "Mithun", "Alka", "Prabir", "Vinay"];
// names.sort();
// console.log(names);

// let arr5 = ["Dress", "Jacket", "Shirt", "Jeans" , "Scalf" , "Nodes"];
//  arr5.sort();
//  console.log(arr5)

//  Numeric Sorting Method
// ASSECENDIN ORDER
let numbers = [ 43,68,82,91,299,554, 10,]
numbers.sort((a,b) => a-b);
console.log(numbers)

// DECENDING ORDER
let number2 = [ 43,68,82,91,299,554, 10,]
numbers.sort((a,b) => b-a);
console.log(number2)
