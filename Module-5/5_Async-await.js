// Async-await ()
async function getdata(){    // Async-await, always returns a promise
    setTimeout(() =>{
        console.log("Iam inside set timeout block");
    }, 2000);
}

const ans = getdata();
console.log(ans);



// Async code
// async function getdata(){
//     // sync
//     let response = fetch('https://randomuser.me/api/'); //Async

//     console.log(response);  //sync
// }
// getdata(); //func called

// Scenario:

// send fetch request => sync

// get the response => Async(because it will take time to get the response)

// process the response => sync (There are no data in the response)

//Output => promise {undefined}



// sync code using Async-await
async function getData() {
    let response = await fetch('https://randomuser.me/api/'); // Await the response from the API (sync)

    let data = await response.json(); // await to Convert the response to JSON format (sync)

    console.log(data); // print the data (sync)
}

getData(); // Function called
