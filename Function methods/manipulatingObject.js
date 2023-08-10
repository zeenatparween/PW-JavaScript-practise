//    1) Accesing data
 const emp = {
    id : 101 ,
    name: "Alex",
    salary : 'Doe'
 }
 console.log(emp.id)
 console.log(emp['name']);

//  Adding Data
let emp2 = {
   id : 497,
   name : "zobiya",
   salary : 55000
}
emp.items = 10;
console.log(emp);
emp['type'] = 'intern';
console.log(emp)

// Changing Data 
let emp3 = {
    id : 305,
    name : 'Faham',
    salary : 3200
}
console.log(emp3)
emp3.id = 602;
console.log(emp3)
emp3['name'] = "Zubi"
console.log(emp3)


// Deleting data
let emp4 = {
    id : 306,
    name : "Hania",
    salary : 10000
}
emp4.name = null;
console.log(emp4)
delete emp4.salary
console.log(emp4)

