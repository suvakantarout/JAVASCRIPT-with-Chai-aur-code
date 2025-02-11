// Function syntax

// function name (Prameters){
//     //func Body
// }

// func call
// name(Arguments / values);


// Function without reaturn type / Doesn't returning any thing
function sum(num1,num2){
    console.log(num1 + num2)
}
sum(5, 5)

  
// Function with return type
function sum(num1,num2){
    return num1 + num2;
}

let ans = sum(10,10)
console.log(ans);


// Rest Operator
function calculatecartprice(...num1){  // (...)Rest operator (add the numbers/contents into an array)
    return num1
}

console.log(calculatecartprice(200,400,300,500))



// Pass Object to an function argument
const user = {
    username: "Suv",
    price: 199
}

function handelObject (anyobj){
    return anyobj;
}

console.log(handelObject(user));


// pass an array to an funcction argumrnt.

let arr = [200,400,300,100];

function returnSecondvalue(getArray){
    
}