let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout( () => {
        console.log("I am a promise and i am resolved")
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout( () => {
        console.log("I am Promise and and I am rejected")
        reject(new Error("I am an Error"))
    },5000)
})
console.log(p1,p2)
p1.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.log("some error occured in p2")
})

