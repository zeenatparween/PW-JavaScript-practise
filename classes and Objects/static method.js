// static method only called by their class name
// static method cannot caled by object name
class Product {
     name;
      price;
      rating;
      #discount;  // this is called private data , User cannot see it
    static custom(){
        console.log('calling the static method')
    }
   display(){
    console.log("displaying the function" ,this.#discount)
   }
}
const pro = new Product();
console.log(pro)
pro.name = "haniya"
//called by object
pro.display(); // here  function has been called by object name
// called by class name
Product.custom() // here static method cannot called by object it is called by their class name
