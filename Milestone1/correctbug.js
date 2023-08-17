let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newarr = []
 function arrBug(arr){
      for(let i=0; i<arr.length; i++){
        let a = arr[i]*2
        arr[i]= arr[i]
        //  newarr.push(a)
     }     
   
}
arrBug(arr); 
// console.log(newarr);
console.log(arr);

// Calculate Rental Cost
// function Rentalcost(Days, Cost){
//     return Rentalcost = Days*Cost
// }
// console.log(Rentalcost(3,2000))