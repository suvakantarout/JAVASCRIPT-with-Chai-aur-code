// stack memory => it Stores primitive datatypes (copy of values is happens, real value doesnot change)
// Heap memory => it stores non primitive / Reference datatypes (variable reference will pass, Original value changes)

// Primitive datatype
let myname = "suvakant";

let father = "Baikuntha";
father = "gopal row";

console.log(myname);
console.log(father);

// Nonprimitive / Reference datatype

let userone = {
    email: "suvakantarout2020gmail.com",
    id: 1234
}

let usertwo = userone;

usertwo.email = "2201020424@cgu-odisha.ac.in";

console.log(userone.email);
console.log(usertwo.email);