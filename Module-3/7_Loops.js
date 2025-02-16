
// for(let i = 0; i<=10; i++){
//     if(i === 5){
//         console.log("5 is best number");
//     }
//     console.log(i);
// }


// Nested Loop
// for(let i = 0; i<=10; i++){
//     console.log("Inner loop value",i);
//     for(let j =0;j<=10; j++){
//         console.log(`Inner loop value ${i} and outer loop value ${j}`);
//     }
// }


// Multiplication table
for(let i = 0; i<=10; i++){
    console.log(`Multiplication table of ${i}: `);
    for(let j = 0; j<=10; j++){
        // console.log(i +'*' + j + '=' +  i*j);
        console.log(`${i} * ${j} = ${i *j}`)
    }
}


// Break
for(let i = 0; i<=10; i++){
    if(i === 5){
        console.log("Detected break")
        break
    }
    console.log(i);
}

// continue
for(let i = 0; i<=10; i++){
    if(i === 5){
        console.log("Detected break")
        continue
    }
    console.log(i);
}


// while Loop
let i = 0;
while(i <= 5){
    console.log("happy");
    i++;
}

// do while loop

let score = 0;
do{
    console.log(`Score is: ${score}`);
    score++;
}
while(score <= 5)