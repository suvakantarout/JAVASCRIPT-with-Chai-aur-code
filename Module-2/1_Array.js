// Array => In javascript array is Dynamic in terms of ResizeObserverSize, like vector

let arr1 = [1,2,3,4,5,6];
let arr2 = ["suv","swagat"];
// console.log(arr1);
// console.log(arr2);
// console.log(arr1[1])
// console.log(arr2[1])


// // Array methods
// arr1.push(10);  //Push element at the end.
// console.log(arr1);

// arr1.pop();   // pop elemet from the end.
// console.log(arr1);

// arr1.unshift(111);  // Add element at the starting of the array. by shifting all the elements.
// console.log(arr1);

// arr1.shift();   //Remove the unshift element.
// console.log(arr1)

// console.log(arr1.indexOf(3));
// console.log(arr1.includes(3)); //If any index having the value 3 then it will return true else false.



// slice & splice

console.log("A ",arr1);
let myarray1 = arr1.slice(1,3);  // It will give elements of index 1 and 2. 
console.log(myarray1);
console.log("\n");

console.log("B ",arr1); 
console.log("\n");

console.log("C ",arr1);
let myarray2 = arr1.splice(1,3);  //It will remove the elements having the indexs from 1 to 3.
console.log(myarray2);
console.log("\n");

console.log("D ",arr1);  