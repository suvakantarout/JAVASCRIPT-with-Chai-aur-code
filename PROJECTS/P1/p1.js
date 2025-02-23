const buttons = document.querySelectorAll(".button");
const headings = document.querySelectorAll(".text");
const body = document.querySelector("body")
buttons.forEach( (B) => {
    B.addEventListener('click',function(e){
        const spanele = e.target; //it will give all the html span elements (give the clicked items)

        if(spanele.id === "black"){
            body.style.backgroundColor = "rgb(24, 24, 24)";
        }
        if(spanele.id === "white"){
            body.style.backgroundColor = "white";
        }
        if(spanele.id === "gray"){
            body.style.backgroundColor = "rgb(96, 96, 96)";
        }
        if(spanele.id === "blue"){
            body.style.backgroundColor = "rgb(60, 60, 123)";
        }
        if(spanele.id === "pink"){
            body.style.backgroundColor = "rgb(255, 194, 204)";
        }

        // Changing the color of the texts according to the screen color
        updateHeadingsColor();
    });

});

// Function to update headings' color based on the current background color
function updateHeadingsColor() {
    const bgColor = window.getComputedStyle(body).backgroundColor; // Get computed background color

    headings.forEach((H) => {
        if (bgColor === "rgb(24, 24, 24)") {
            H.style.color = "white";
        } else if (bgColor === "rgb(255, 255, 255)") {
            H.style.color = "black";
        } else if (bgColor === "rgb(96, 96, 96)") {
            H.style.color = "black";
        } else if (bgColor === "rgb(60, 60, 123)") {
            H.style.color = "black";
        } else if (bgColor === "rgb(255, 194, 204)") {
            H.style.color = "white";
        }
    });
}