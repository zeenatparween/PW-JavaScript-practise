// getter and setter method is used for taking private date from the users
// getter for taking data
// setter for adding data

class product {
    #rating;
     constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r
     } 
     get ratingGetter(){
        console.log(this.#rating);
     }
     set ratingSetter(r){
        if(r< 0) return;
        this.#rating = r;
     }
}
const p = new product("Oppo-Galaxy", 45000,  );
console.log(p)
p.ratingSetter = 40;
p.ratingGetter;