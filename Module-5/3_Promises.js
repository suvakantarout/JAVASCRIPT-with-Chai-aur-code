
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




// promise_5 (Consume the promise through Async and await)
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    }, 2000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
