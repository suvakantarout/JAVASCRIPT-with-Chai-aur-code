
// Use of call and this

function client(username){
    this.user = username;
    console.log("called");
}

function creatuser(usernmae, email, password){
    client.call(this,username)

    this.mail = email;
    this.pass = password;
}

const chai = new creatuser("Suv","suv@gmail.com", "123")
console.log(chai);