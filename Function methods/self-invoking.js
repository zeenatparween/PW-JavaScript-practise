 (function (){
     console.log(Math.PI);
 })();

 (function (x){
     console.log(x)
 })("Welcome to PW Skills");

 (function (z,y,q){
     console.log(z+y+q)
 })(3,8,6);

 (function (p,r,t){
     multi = p*r*t
     console.log(multi)
 })(2,4,3);

 (function (length, width, height){
     areaOfRectangle = 2*(length+width+height)
     console.log( areaOfRectangle)
 })(78,50,34);


(function (originalPrice , LessPrice){
    Discount = (Math.floor(((originalPrice - LessPrice)/LessPrice)*100))
    console.log( Discount+"%")
    
})(8000, 6000);

