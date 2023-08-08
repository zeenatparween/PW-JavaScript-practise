 class Product{
    // Properties -> Variables -> data Member
    name;
    price;
    rating;
    
    //behaviour -> function -> member function 
     display(){
         console.log("Displaying the current Products")
     }
    slow(){
        console.log("what rating you want to give")
    }

 }
 const p = new Product(); // creates an empty plain objects
 console.log(p);
 p.display();
 p.slow()