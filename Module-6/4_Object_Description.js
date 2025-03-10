// Can we change the value of PI injavascript, whether PI is a constant in javascript

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);


// Example:
const chai = {
    name: "Ginger chai",
    price: 149,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //chai ke ander name ka property de do
// getOwnPropertyDescriptor => will give the entire description of "name" property.
