function GenerateRandomNumber(){
    let RandomNumber = Math.random()*100;
     RandomNumber = Math.floor(RandomNumber)+1
    //   console.log(RandomNumber)
      return RandomNumber
}
GenerateRandomNumber();
console.log(GenerateRandomNumber());

