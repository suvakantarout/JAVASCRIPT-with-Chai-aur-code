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

 

function chai(){
    console.log(this);
}

chai();