// First January is begin Sunday in which year
// console.log("Which year First January Sunday coming")
// for(var year = 2014; year<=2050; year++) {
//     var d = new Date(year, 0,1);
//     if(d.getDay() === 0)
//     console.log("1st january is begin a Sunday" +year)
// }
// console.log(d)

//  how many Days Left Until Next Chrismas
let date = new Date();
// console.log(date);
let chsms = new Date(date.getFullYear(), 11,25)
// console.log(chsms)
if(date.getMonth()==1 && date.getDate()>25){
    chsms.setFullYear(chsms.getFullYear()+1);
}
var one_day = 1000*60*60*24;
console.log(Math.ceil((chsms.getTime()-date.getTime())/(one_day))+"Days Left Until Chrismas!")
