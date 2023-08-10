//  Pop();
let fruits = ['apple', 'banana', 'mango', 'cherry']
console.log(fruits)
let last = fruits.pop()
console.log(fruits)
console.log(last)


// push()
let animals = ['Giraffe', 'Loepard', 'Sheep', 'zebra']
console.log(animals)
let last2 = animals.push('Tiger')
console.log(animals)
console.log( 'length:',last2)


// shift()
let Books = ['physics', 'Chemistry', 'Biology','Social Science']
console.log(Books)
let first = Books.shift();
console.log(Books)
console.log(first)


// unshift()
let language = ['DSA', 'C++', 'pthyon', 'Java', 'HTML']
console.log(language)
let first2 = language.unshift('React')
console.log(language)
console.log('length:',first2)


// concat()
let array1 = [1,2,3,]
let array2 = [4,5,6,7]
let array3 = [8,9,10,11]
let concat = array1.concat(array2)
console.log(concat)
let concat2 = array1.concat(array2 , array3)
console.log(concat2)


// Join()
let string = ['Library', 'Stationary', 'Vocabulary', 'cordinary']
console.log(string)
let join = string.join();
console.log(join)
let join2 = string.join('---')
console.log(join2)


// slice()
let fruits2 = ['apple', 'banana', 'mango', 'kiwi' , 'pineapple']
console.log(fruits2)
let slice = fruits2.slice(1 , 4)
console.log(slice)


// splice 
let numbers = [1,2,3,4,5,6,7]
console.log(numbers)
let removed = numbers.splice(2,3,23,67)
console.log(removed)


// reverse
let string2 = [40, 50, 60, 70, 80, 90, 100]
console.log(string2)
let string3 = string2.reverse();
console.log(string3)


// indexOf()
let name = ['zainab', 'zohra', 'Falak', 'Shagufta']
console.log(name)
let name2 = name.indexOf('Falak')
console.log('index value of Falak is', name2)