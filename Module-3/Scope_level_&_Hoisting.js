
if(true){
    const username = "Suv";
    if(username == "Suv"){
        const website = " Suv's blog";
        console.log(username + website);
    }
    // console.log(website); // Error
}

// console.log(username);  //Error



console.log(addOne(5));  //will execute successfully, Cause when a functon called it immediately
// go to its defination.
function addOne(num){
    return num + 1;
}



console.log(addTwo(5)); //will give an error(Access 'addTwo' before initialization)
const addTwo = function(num){ // Hoisting => addTwo hostes the Function
    return num + 2;
}


