let num1 = [12,56,89,3,6,8,9,23,56,89,43,56,78,45]
let length = num1.length;
for(i= 0; i<=length; i++){
    if(num1[0]%3==0){
        console.log(num1)
    }
    else if(num1[0]%2 != 0){
      console.log(`${num1} not divisible`)
    }
}

