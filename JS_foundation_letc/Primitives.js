// Number
let balance = 120;
let anotherbalance = new Number(120);

// just print
console.log(balance);
console.log(anotherbalance);

// print the type of the datatype
console.log( typeof balance);  // primitive
console.log(typeof anotherbalance);   // Non prmitive


// String
console.log("\n");
let name = "Suv";
let name2 = 'Sunit';
console.log(name);
// console.log(name + " " + name2);
console.log(`${name} ${name2}`);  //It will automatically add space to the string
console.log(`Hello ${name}`);


// Null & Undefined
console.log("\n");
let myname;   // It doesnot defined
console.log(myname);

let myname2 = null;
let myname3 = undefined;
console.log(myname2);
console.log(myname3);


//Symbol    (Its uniquely identify a thing.)
console.log("\n");
let something = Symbol();
let something2 = Symbol("Suv");

console.log(something);
console.log(something2);


