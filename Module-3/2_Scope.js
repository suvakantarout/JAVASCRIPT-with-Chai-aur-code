
let a = 300;
if(true){
    // Local variable, cannot accessed outside of the 
    let a = 10;
    const b = 39;
    var c = 405;   // Due to var c can be accessed outside of the function
    console.log(a,b);
}


// console.log(a,b)
console.log(c);
console.log(a);