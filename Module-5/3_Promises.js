
// PROMISE => Promise is used to handel the Async code and return a promise

// How to write promise method - 1
// promise_1
const promiseOne = new Promise( (resolve, reject) => {
    setTimeout(function(){
        console.log("Async task1 is completed");
        resolve();
    }, 1000)  //Do the task once after 5sec .
})

promiseOne.then(() => {
    console.log("Promise1 consumed");
})


// How to write promise method - 2 
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    }, 1000)

}).then(() => {
    console.log("Promise2 consumed");
})



// promise_3
const promiseThree =  new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve({
            // object
            username: "chai",
            email: "chai@example.com",
        })
    }, 2000)
})
promiseThree.then((user) => {
    console.log(user);
})


// promise_4 (Consume the promise through .then .catch and .finally)
const promiseFour = new Promise((resolve, reject) => {
   let success = true;
   if(success){
        resolve("Prmise fuldilled :)");
   }
   else{
        reject("Promise rejected!!!!!!");
   }
})

promiseFour.then((message) =>{
    console.log("Then ka message is: " + message);
}).catch((error) => {
    console.log("Error is: "+ error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// Multiple then blocks / promise chaining
/ promiseFour.then((message) =>{
    console.log("first message: " + message);
    return "Promise fulfiled 1st message";
}).then( (message) =>{
    console.log("second message: " + message);
    return "Promise fulfiled 2nd message";
}).then( (message) =>{
    console.log("Third message: " + message);
    return "Promise fulfiled 3rd message";
}).catch((error) => {
    console.log("Error is: "+ error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



// Promise.all()

let Promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "FIRST");
})
let Promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "SECOND");
})
let Promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, "THIRD");
})
let Promise4 = new Promise((resolve, reject) =>{
    setTimeout(reject, 4000, "FOURTH");
})

Promise.all([Promise1, Promise2 ,Promise3 ,Promise4])
.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("Error found: " + error);
})