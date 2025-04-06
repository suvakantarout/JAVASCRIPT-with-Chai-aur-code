const form = document.querySelector("form");
form.addEventListener('submit',(S) =>{
    
    S.preventDefault();  //Not goung to another page, instread stay in that page and calculate the ans.

    const height = parseInt(document.querySelector("#Height").value); 
    const weight = parseInt(document.querySelector("#Weight").value);   //value returns in string(parseInt is used to convert it into string)
    const Results = (document.querySelector("#results"));

    if(height === '' || height<0 || isNaN(height)){  //isNAN() => check height is a number or not(return true/false)
        Results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        Results.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        Results.innerHTML = `${bmi}`;
    }
});