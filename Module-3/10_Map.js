// MAP
const myNums = [1,2,3,4,6,7,88,10];

const Newnums = myNums.map( (num) => {
    return num + 10;
})
console.log(Newnums);


// CHAINING (Map & Filter)

const newNum = myNums
            .map( (num) => num * 10) //Map 1
            .map( (num) => num + 1)  //Map 2
            .filter( (num) => num >= 40) //Filter

console.log(newNum)