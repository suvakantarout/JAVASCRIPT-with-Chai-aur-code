const name = "Sunit"
const repocount = 6

// console.log(name + repocount)  // old method

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  // New method in javascript
// `` => Backtick

let name2 = new String ("Suvakanta rout");   //Dynamically allocate the string
console.log(name2[1]);
console.log(name2[5])
console.log(name2[9])

// STRING FUNCTIONS
console.log(name2.length); //Return the length of the string
console.log(name2.toUpperCase());  //Convert to uppercase
console.log(name2.charAt(10));  //Return the character 
console.log(name2.indexOf('t'));  //reture the index of a perticulsr chsrscter
console.log(name2.substring(0, 8));  //printing substring from one index to another index
console.log(name2.slice(0,4));  //split the required string

let str3 = "     suv     ";
console.log(str3);
console.log(str3.trim()); // Trim the spaces from start as well as end of a string.


let str4 = "My name is suv";
console.log(str4.split(' '));  // Split a string through sapce


