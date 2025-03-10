// class user {

//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){   //encrypt method
//         return `${this.password}abc`
//     }

//     usernameToUppercase(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new user("suv","chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.usernameToUppercase());


// Inheritance

class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
} 

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;

    }
}