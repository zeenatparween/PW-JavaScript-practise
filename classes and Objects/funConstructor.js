function product ( n, p ,r){
    this.name = n;
    this.price = p;
    this.rating = r;
    // return { x:10, y:20}
    // return this
}
// const p = new product('iphone', 80000, 4)
// console.log(p)

let x = {
    p2:product
}
x.p2("iphad" , 5000 , 3)
console.log(x)


//Example3 
const product3 = function (n, p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p4 = new product3('Moto', 9000 ,6) 
console.log(p4)


// arrow function doesnot not Execute this keyword
// const product4 = (n,p,r) => {
//     this.name = n;
//     this.price =p
//     this.rating =r;
// }
// const p5 = new  product4("Motorola" ,10000 , 6)
// console.log(p5)












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































