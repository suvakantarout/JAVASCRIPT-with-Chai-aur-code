// Arrow functions

const user = {
    username: "Suv",
    price: 999,

    welcomeMessage: function(){
        console.log(`$(this.username), welcome to website`);
    }
}

console.log(user.welcomeMessage());

console.log(this); // Interview