const jsUser = {  //jsUser => Object
    // Keys
    name: "Suv",
    "Full name": "Suvakanta Rout",
    age: 18,
    location: "BBSR",
    email: "suvakantarout2020@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser.name)
console.log(jsUser.location)
console.log(jsUser.age)
console.log(jsUser.isLoggedIn)

console.log(jsUser["Full name"])  // Full name can't Accessed through (.) operator