
for(let i = 0; i<=10; i++){
    if(i === 5){
        console.log("5 is best number");
    }
    console.log(i);
}


for(let i = 0; i<=10; i++){
    console.log("Inner loop value",i);
    for(let j =0;j<=10; j++){
        console.log(`Inner loop value ${i} and outer loop value ${j}`);
    }
}