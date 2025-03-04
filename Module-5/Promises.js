const promiseOne = new Promise( (resolve, reject) => {
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 5000)  //Do the tasks after 5sec.
})

promiseOne.then(function(){
    console.log("Promise consumed");
})



