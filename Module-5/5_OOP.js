
const object = {
    name: "Suv",
    id: "1234",
    signedIn: true,


    objFunc: function(){
        console.log("Get user details from data base");
        console.log(`name is: ${this.name}`);  // this-> refers to the current context
        console.log(this);
    }
}
// console.log(object);
console.log(object.name);
console.log(object.objFunc());




// constructor function

function user (username, logincount){
    // name = username;
    this.user = username;
    // lcount = logincount;
    this.lcount = logincount;
}

const userOne = new user("suv", 5);
const userTwo = new user("Sai", 10);

console.log(userOne);
console.log(userTwo)