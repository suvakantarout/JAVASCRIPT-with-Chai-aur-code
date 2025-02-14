// This keyword => Refers to the current context.

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