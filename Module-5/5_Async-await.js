// Async-await ()
async function getdata(){
    setTimeout(() =>{
        console.log("Iam inside set timeout block");
    }, 2000);
}

const ans = getdata();
console.log(ans);
