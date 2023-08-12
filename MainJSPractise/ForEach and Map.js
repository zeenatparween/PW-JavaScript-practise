// FOR EACH  METHOD
// let itemsInCart = ["apple", "Banana", "Comb","mike","keyboard","t-shirt", "mobile holder"];
// itemsInCart.forEach((item) => console.log(item));

// function 2
// let shopingList = ["Shampoo", "Towel", "Violet", "Gel", "Perfume", "Spray"]
// shopingList.forEach((element, index, arr) =>  console.log(`The item ${element} was added to cart for shopping ${index+1}. The items in cart are ${arr}.`  ))


// MAP METHOD
// let CardItemsAsString = ["100", "300", "345","146", "205","654"];
// // print as String
// console.log( CardItemsAsString)  
// // Print as a numbers
// let CardItemsAsNumbers = CardItemsAsString.map((item) => Number(item));
// console.log(CardItemsAsNumbers)  

// let StringName= ["HTML", "CSS", "Javascript", "Pthyon", "Java"]
// let RemoveString = StringName.map((el) => String(el));
// console.log(RemoveString)

// let NumberAsString = ["100","400","340","600"]
// let ConvertIntoNumber = NumberAsString.map((element) => Number(element))
// console.log(ConvertIntoNumber)



// FILTER METHOD
// let UserName = ["Mithun", "Anurag", "Alka" , "Prabir", "Vinay"];
// let LongUserName = UserName.filter((ele) => ele.length>5)
// console.log(LongUserName);


// let Movies = ["Panther","Thor", "Pirates of carabian", "Chimpanje", "Cold Skin"]
// let ShortLenthName =  Movies.filter((current, index, array ) => current.length<12)
// console.log(ShortLenthName )


let Numbers = [ "34545","76834245","456786775","789","234","546565","234535","5664","2456734"]
let ShortNumbers = Numbers.filter((element) => element.length<7) 
console.log(ShortNumbers)