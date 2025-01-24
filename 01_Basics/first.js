console.log("Hello world")
const accountId = 2345443  // Remain consant through out the program
let accontEmail = "suvakantarout2020@gmail.com"
var accountPassword = "100"
accountCity = "Bangaluru"

/*
    Prefer donot using var datatype because There is a scope { } issue with var (var has no scope) in java script
    Always use let instread of var
*/

console.log(accountId)
console.log(accontEmail)
console.log(accountPassword)
console.log(accountCity)


// accountId = 101  ( Not allowed as the variable is constant )
accontEmail = "2201020424@cgu-odisha.ac.in"
accountPassword = "999999"
accountCity = "Odisha"
let accountNo  // It will show undefined, as accountNo has not defined yet.

console.table([accountId,accontEmail,accountPassword,accountCity,accountNo]) //print all the variables inside one tabe


