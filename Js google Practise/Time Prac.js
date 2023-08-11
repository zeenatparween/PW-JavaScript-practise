//  Print Current Date and Time
let date = new Date();
console.log(date)
let Time = date.getTime()
console.log(Time)
let hour = date.getHours();
console.log(hour)
let Minutes = date.getMinutes()
console.log(Minutes)
let seconds = date.getSeconds();
console.log(seconds)
let Month = date.getMonth()
console.log(Month+1)
let year = date.getFullYear()
console.log(year)

// Program to get the current Date.
let today = new Date();
let dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){
    dd = '0'+dd;
}
if(mm<10){
    mm ='0'+mm;
}
today = mm+ '-' + dd + '-' + yyyy;
console.log(today);
today = mm+ '/'+dd+ '/' + yyyy;
console.log(today);
today = dd+ '-'+mm+ '-'+yyyy;
console.log(today);
today = dd+ '/'+mm+ '/'+yyyy;
console.log(today);
 