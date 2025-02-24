
// 'Date' IS A OBJECT IN JAVASCRIPT ====> Important


let mydate = new Date()  // Date => here 'Date' is a object and mydate is an instance of 'Date' object
console.log(typeof mydate); //Object
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());


// let Todaysdate = new Date(2025, 1, 3);   //Date(year, month(srarts from 0), date)
let Todaysdate = new Date("02-3-2025");
console.log(Todaysdate.toLocaleString());


let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(Todaysdate.getTime());