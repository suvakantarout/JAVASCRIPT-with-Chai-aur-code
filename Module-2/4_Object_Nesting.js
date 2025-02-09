
// Object Nesting
const regularUser = {
    email: "somnath@gmail.com",
    fullname : {
        userFullname: {
            firstname: "Somnath",
            lastname: "Mahapatra"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userFullname)


// Object Concadination
const obj1 = {a:1,b:2,c:3}
const obj2 = {d:4,e:5,f:6}
const obj3 = {g:7,h:8,i:9}

const obj = Object.assign({},obj1,obj2,obj3)
console.log(obj);

// Object spread
const objj = {...obj1,...obj2}
console.log(objj)


// Array of object

const users = [
    {
        id: 1,
        name: "suv"
    },
    {
        id: 2,
        name: "suvv"
    },
    {
        id: 3,
        name: "suvvv"
    },
    {
        id: 4,
        name: "suvvvvv"
    }
]
console.log(users[1].id)
console.log(users[1].name)



const Tinderuser = {
    id: "121341",
    name: "SUV",
    isLoggedin: true
}
console.log(Tinderuser)

console.log(Object.keys(Tinderuser))  // By this we can find all the keys of object
console.log(Object.values(Tinderuser))