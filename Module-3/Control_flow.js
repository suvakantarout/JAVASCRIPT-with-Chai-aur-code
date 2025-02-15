// if statement

const isLoggedin = true;

if(isLoggedin){
    console.log("yes")
}
else{
    console.log("No")
}

// conditions => <, >, <=, >=, ==, !=, ===, !==

if(2 === "2"){   // type of both element are not same.(===(strict equal))
    console.log("True")
}
else{
    console.log("False");
}

let temp = 41;
if(temp === 41){
    console.log("warm")
}
else{
    console.log("cool")
}


// Interview :

// falsy values => false, 0, -0, NAN, undefined, "", null, Bigint
// Truthy values => true, 1, "0", "false", " ", [], function(){}



// Nullish coalescing operator(??)
let val
val = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10
val4 = null ?? 10 ?? 20

console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)