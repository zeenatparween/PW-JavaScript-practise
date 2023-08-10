// There are three ways to Creatin Objects.
// 1)By Object Literal
// 2)By using new Keyword
// 3)By using this Keyword

     // 1)By using objects Literals
//   object = { name1:Value1, name2:value2  , nameN: ValueN}
  
//   Example
emp = {
    id:101,
    name:"Alex",
    salary: 10000
}
console.log(emp.id + " "+ emp.name + " " + emp.salary)

// 2)By using new Keyword
var emp = new Object()
  emp.id = 431;
  emp.salary = 68000;
  emp.name = "Shehriyar"
  console.log(emp.id + " " + emp.name + " " + emp.salary);


//   3)By using this Keyword
function Emp(id , name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
const e = new Emp(578 , "Mawra" , 75000);
console.log(e.id + " " + e.name + " " + e.salary);


