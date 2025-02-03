// DATA TYPES => Primitive & Nonprimitive/Reference
// Primitive => String, Boolean,Number,undefined,BigInt,null,symbol
// Nonprimitive => Array,Object,Function.


console.log("DATA TYPES")

let name = "sunit";  //string type
let age = 19;    //Integer type
let isloggedin = true;   //boolean type
let id = null;    //Null type
let marks       //undefind type
const bigNumber = 1234251623564366;  // bigint

console.table([name,age,isloggedin,id,marks,bigNumber]);

//Symbol type
const code = symbol('1223');
const anotherCode = symbol('2222');

console.log(code == anotherCode);

