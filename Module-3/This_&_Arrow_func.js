// This keyword => Refers to the current context.
// This => This keyword is only used in javascript object.
const user = {
    username: "Suv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage();
user.username = "Sam"
user.welcomeMessage();


console.log(this); // Interview

 
// This keyword is not working here
function chai(){
    let name = "Suv";
    console.log(this.name);  //Undefined
}
chai();


// ARROW Function (=>)

// const addTwo = (num1,num2) => {    (Explicit return -> when function defination is present inside {})
//     return num1 + num2
// }
                    // OR
// const addTwo = (num1,num2) => num1 + num2   (Implecit return)
                    // OR 
const addTwo = (num1,num2) => (num1 + num2)    // (Implecit return)

console.log(addTwo(5,5));
