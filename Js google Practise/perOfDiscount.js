let Discount = (OriginalPrice, LessPrice ) =>{
   let  DiscPer = ((OriginalPrice - LessPrice)/LessPrice)*100
   DiscPer = Math.round( DiscPer)
    return DiscPer
    }
Discount();
console.log(Discount(7000 , 5000))