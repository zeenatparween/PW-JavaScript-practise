//Three methods of creating object
// const obj1 = new obj1({
//     name: shamshir,
//     class: 'MCA'
// })

// const obj2 = new obj2()
// const obj3 = {
//     name: shamshir,
//     class: 'MCA'
// }

 const objp = {
    name: "Ajay Suneja",
    getName:function(){
        return this.name
    }
 }
//  console.log(objp)

 const objp2 = {
    roll:1,
    name:"seminar",
    __proto__:objp
 }
  console.log(objp2)
  console.log(objp2.getName())
//   console.log(objp2.getRoll())

const objp3={
    class: "MCA",
    __proto__:objp2
}
//console.log(objp3)
// console.log(objp3.getName())

// Array concept

const array1 = ["Ajay"];
console.log(array1)

const object = new Object();
console.log(object)

const array = new Array();
console.log(array)

Array.prototype.show = function(){
    return this;
}
const cities = ["Delhi"];
console.log(cities.show())

Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach(ele => {
        newObj[ele]= ele;
    })
    return newObj;
}
console.log(cities.convertIntoObject())

function MyPrototype(name){
    this.name = name;
}
const myproto = new MyPrototype("Prinyanka");
console.log(myproto )