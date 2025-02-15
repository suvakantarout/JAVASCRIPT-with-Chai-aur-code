// Immediately Invoked Function Expression (IIFE)

// IIFE ==> IIFE is used to reduce the Global scope polution from the program.

// IIFE is generally used to avoid function calling Globally

// IIFE ==> ()()
// () => Is for argument
// () => Is for the entire function

(function DBC(){
    console.log("DB CONNECTED");
}) ();

// console.log(DBC());

( () => {
    console.log("DB CONNECTED");
}) ()