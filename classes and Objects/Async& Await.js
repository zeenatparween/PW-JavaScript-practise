    // Async

async function Printresult(){
    return "Hello"
}
let result = Printresult()
console.log(result)

async function printResult(){
    return "Hello! Everyone"
}
printResult().then((result) => console.log(result));

        // Await

async function PrintHelloAfterThreeSeconds(){
    let data = new Promise((resolve , reject) => {
        setTimeout( () => {
            resolve("Printing: Hello");
        },3000)
    })

    let result2 = await data //Wait until the asynchronous operation is resolved : 3 seconds
    console.log(result2);
}