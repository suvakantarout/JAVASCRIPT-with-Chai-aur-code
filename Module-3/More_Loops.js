// FOR OFF LOOP

// In Array
let arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num);
}


// In String
let str = "Hello world";

for(const text of str){
    console.log(`Greetings for the day: ${text}`)
}
console.log("\n")


// In map (key,value)
const map = new Map();
map.set('IN', 'India')
map.set('ENG', 'England')
map.set('US', 'United states')
map.set('UAE', 'United Arabian Emirates')

for(const [key, value] of map){
    console.log(key, ':', value)
}
console.log("\n");


// FOR IN LOOP

let myobj = {
    id: 124234,
    name: 'Suv',
    c_name: "Dellote"
}

for(const key in myobj){
    console.log(key, ':', myobj[key]);
}