// let string = "SocialMedia456@gmail.com";
// let pattern = /^[a-zA-Z0-J.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-J-]+(?:\.[a-zA-Z0-J-]+)*$/;
// console.log(pattern.test(string))


let string2 = "DijasterFade65&$#@live.com" 
let string3 = "Semester$#@.com" 
let string4 = "Dijaster65@live.com" 
let string5 = "Telecom@gmail.com" 
let string6 = "youtube&*#456.com" 

let pattern2 = /^[a-zA-Z0-J.!#$%&'*+/=?^_{|}~-]+@+[a-zA-Z0-J-]+(?:\.[a-zA-Z0-J-]+)*$/
console.log(pattern2.test(string2))
console.log(pattern2.test(string3))
console.log(pattern2.test(string4))
console.log(pattern2.test(string5))
console.log(pattern2.test(string6))

