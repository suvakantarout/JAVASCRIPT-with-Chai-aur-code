// Add into a songle array
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));


// concadinate two arrays
const marvel_heros = ["Thar","Spiderman","Ironman"];
const DC_heros = ["Superman", "Flash","Batman"]
const Bol_heros = ["Sahid Kapoor","Sarukh khan","Varun Dhawan"]

let concadinate = marvel_heros.concat(DC_heros);
console.log(concadinate);


// spread operator
let spread_operator = [...marvel_heros,...DC_heros,...Bol_heros]  //(spread operator ==> ...)
console.log(spread_operator);