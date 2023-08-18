let heading = document.getElementById("heading")
let para = document.getElementById("para")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn1.addEventListener('click', button)
function button(){
    heading.style.color = "white"
    para.style.color = "white"
    btn1.style.color = "purple"
    btn2.style.color = "purple"
    document.body.style.background = "purple"
}
btn2.addEventListener('click', secondbutton)
 function secondbutton(){
   document.body.style.backgroundColor = 'darkcyan'
    heading.style.color = "black"
    para.style.color = "black"
    btn1.style.color ="darkgreen"
    btn2.style.color = "darkgreen"
}
