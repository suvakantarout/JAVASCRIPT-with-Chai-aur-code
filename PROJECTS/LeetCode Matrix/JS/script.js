document.addEventListener("DOMContentLoaded",function(){
    const searchButton = document.getElementById("search_button"); //id
    const usernameInput = document.getElementById("userInput"); //id
    const userdatacontainer = document.getElementsByClassName("user_data_contaner") 
    const easyprogressCircle = document.getElementsByClassName("easy-progress");
    const midprogressCircle = document.getElementsByClassName("mid-progress");
    const hardprogressCircle = document.getElementsByClassName("hard-progress");
    const easylabel = document.getElementById("easy_label");
    const midlabel = document.getElementById("mid_label");
    const hardlabel = document.getElementById("hard_label");
    const carddatacontainer = document.querySelector(".data_contaiiner")  //its a class(so i added .)



    // searchButton.addEventListener('click', function() {
    //     const username = usernameInput.Value;
    //     console.log("Loggin username: ",username);
    // });
        searchButton.addEventListener('click', () => {
        const username = usernameInput.value;
        console.log("Loggin username: ",username);
    });
})  