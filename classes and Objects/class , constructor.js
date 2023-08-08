class Product{
     name;
     price;
     rating;
    constructor(){
        console.log("calling the constructor")
    }
    display(){
        console.log("displaying the current product")
    }
}
const pro = new Product();
 console.log( pro)

    //Example 2
class  product2 {
    //    name;
    //    price;
    //    rating;
        constructor(n,p,r){
         this.name = n;
         this.price = p;
         this.rating = r
      }
      display1 (){
        console.log("display behaviour")
      }
}
const p2 = new product2('iphone', 67999 , 5 );
// in the above piece of code we are calling constructor method
 console.log(p2)

// Example3
class product3 {

 constructor(n, p , r){
        this.name = n
        this.price = p;
        this.rating = r;
        // return 10; // if you are returning primitive then it will be avoided in constructor
        // return{ x:10, y:20} // if you return non primitive then it will be return
              
    }
    display(){
        console.log("we using  this  " ,this)
        console.log("we also usig" ,this.name , this.price, this.rating)
    }
}

const p3 = new product3('Oppo' , 50000 , 4)
  console.log(p3)
  p3.display();
