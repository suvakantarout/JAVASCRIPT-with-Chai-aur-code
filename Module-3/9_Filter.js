
// Filter => Is used to add any conndition over the loop
const myNums = [1,2,3,4,6,7,88,10];
const myNum = myNums.filter((num) => num > 4)
            //OR
// const myNum = myNums.filter((num) => {
//     return num > 4;  If the condition is inside the scope{}, return keyword is must be there.
// })
console.log(myNum)


// Using Foreach Loop
const Newnum = [];
myNums.forEach((num) => {
    if(num > 4){
        Newnum.push(num)
    }
})

// myNums.forEach((num) => if(num > 4){Newnum.push(num)})

console.log(Newnum);