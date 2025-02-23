const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")
buttons.forEach( (B) => {
    B.addEventListener('click',function(e){
        const spanele = e.target;  //e.target will give all the html span elements
        if(spanele.id === "black"){
            body.style.backgroundColor = "rgb(24, 24, 24)";
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = "white";
        }
        if(e.target.id === "gray"){
            body.style.backgroundColor = "rgb(96, 96, 96)";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "rgb(60, 60, 123)";
        }
        if(e.target.id === "pink"){
            body.style.backgroundColor = "rgb(255, 194, 204)";
        }
    })
})