// function getRectArea(width, height){
//     if (width > 0 && height > 0){
//         return width * height;
//     }
//     return 0 ;
// }
// console.log(getRectArea(3,4))// o/p :- 12
// console.log(getRectArea(-3,4)) // o/p :- 0

// function square(x){
//     return x * x;
// }
// const demo = square(9);



function counter(){
    for (let count = 1; ; count++){
        console.log(`${count}A`)
        if(count === 9){
            return;
        }
        console.log(`${count}B`); 
    }
   
}