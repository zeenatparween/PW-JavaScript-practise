 let button1 = document.getElementById("decrementvalue");
 let input = document.getElementById("displayvalue");
 let button2 = document.getElementById("incrementvalue");
 let button3 = document.getElementById("resetvalue");

 button1.addEventListener('click' ,() => {
//   function Increment(){
    let value = Number(displayvalue.innerText)
    // let value = document.getElementById("displayvalue").value;
    if(value > 0){
        input.innerText = value - 1; 
    }
    else{
        alert("Negative value not allowed")
    }
  });
  button2.addEventListener('click', Decrement);
   function Decrement(){
   let value = Number(displayvalue.innerText)
    // let value = document.getElementById("incrementvalue");
    if(value < 10){
        alert("10+ values are not allowed");
    }
    else{
        input.innerText = value + 1;  
    }
   }
   button3.addEventListener('click', Reset);
    function Reset(){
        input.innerText = 0;
    }
   