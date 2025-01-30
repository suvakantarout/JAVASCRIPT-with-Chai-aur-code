console.log(5 <= 5);  //true
console.log(1 < 0);  //false
console.log(10 >= 9); //true

console.log("2" > 1); //true
console.log("02" > 1); //true

// Avoid these types of comparisons
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >=  0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >=  0); //false