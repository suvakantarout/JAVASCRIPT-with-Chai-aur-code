
// How to write promise method - 1
// promise_1
const promiseOne = new Promise( (resolve, reject) => {
    setTimeout(function(){
        console.log("Async task1 is completed");
        resolve();
    }, 1000)  //Do the task once after 5sec .
})

promiseOne.then(function(){
    console.log("Promise1 consumed");
})


// How to write promise method - 2 
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    }, 1000)

}).then(function(){
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
promiseThree.then(function(user){
    console.log(user);
})


// promise_4 (Consume the promise through .then .catch and .finally)
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "suv", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
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
