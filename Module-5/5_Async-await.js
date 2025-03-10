// Async-await ()
async function getdata(){    // Async-await, always returns a promise
    setTimeout(() =>{
        console.log("Iam inside set timeout block");
    }, 2000);
}

const ans = getdata();
console.log(ans);
