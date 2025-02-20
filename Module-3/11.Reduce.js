// REDUCE

const myNums = [1,2,3];

const myTotal  = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);  // acc=>Accumeletter && currval => current array value
    return acc + currval
}, 0)  // Initially acc is = 0

console.log(`Toatl value is: ${myTotal}`);


// Using Call back ( () => {} )

const MyTOTAL = myNums.reduce( (acc, currval) => (acc + currval), 0 );
console.log("Total value is: ",MyTOTAL)




// Ex => Important

const shoppingCART = [
    {
        itemname: "chicken Pizza",
        price: 299
    },
    {
        itemname: "Chicken butter masala",
        price: 349
    },
    {
        itemname: "Veg Haaka Noodles",
        price: 149
    }
]

const add = shoppingCART.reduce( (acc, item) => (acc + item.price),0 );
console.log("Total cart ammount is:",add);


// Add 1 in every price of the cart
const t = [];
shoppingCART.forEach( (item) => {
    t.push(item.price + 1)
})
console.log(t);