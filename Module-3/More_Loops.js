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


// In map (key,value)  => Map is not iteratibles
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

let myobj = {   //Object cannot iterate through For Off Loop
    id: 124234,
    name: 'Suv',
    c_name: "Dellote"
}

for(const key in myobj){
    console.log(key, ':', myobj[key]);
}
console.log("\n");



// FOR EACH LOOP

let language = ['GO','SWIFT','PYTHON','JS','RUBY'];

language.forEach((names) => {
    console.log(names)
})
console.log("\n");



// Accessing values inside object using For each loop

let mylanguages = [
    {
        languagename: "C",
        Extension: ".c"
    },
    {
        languagename: "C++",
        Extension: ".cpp"
    },
    {
        languagename: "Javascript",
        Extension: ".js"
    }
]

mylanguages.forEach((item) => {
    console.log(item.languagename)
})
  