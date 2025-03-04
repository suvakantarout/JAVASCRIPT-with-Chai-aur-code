
// How to write promise method - 1
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

