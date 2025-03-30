document.addEventListener("DOMContentLoaded", function () {
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



    // Fetch the inputted username

    // searchButton.addEventListener("click", function () {
    //     const username = usernameInput.value;
    //     console.log("Logging username:", username); 
    // });
    searchButton.addEventListener('click', () => {
        const username = usernameInput.value;
        console.log("Loggin username: ", username);
        if (validUsername(username)) {
            fetchUserDetails(username);
        }
    });


    // Check the username is valid or not according to regular expression(regex)
    function validUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{4,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username")
        }
        return isMatching;
    }


    // Function for fetch the data through the leetcode API
    async function fetchUserDetails(username) {

        searchButton.textContent = "Searching...";
        // searchButton.disabled = true;

        // API Call

        // const url = `https://leetcode.com/graphql`
        // await fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error("Unable to fetch the user details");
        //         }
        //         const data = response.json();  //Response data in json format
        //         console.log("Logged data: ", data);  //Printing the json data
        //     })
        //     .catch((error) => {
        //         userdatacontainer.innerHtml = `<p>No data found</p>`
        //     })
        //     .finally(() => {
        //         searchButton.textContent = "Search";
        //         // searchButton.disabled = true;
        //     })

        // OR (Using try and catch block)

        try {
        
            const proxyUrl = `https://cors-anywhere.herokuapp.com/` //Proxy url created.;
            const targetUrl = `https://leetcode.com/graphql/`
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const graphql = JSON.stringify({
                query: `
        query userSessionProgress($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }
    `,
                variables: {
                    username: "your_username_here"
                }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };
            const response = await fetch(proxyUrl+targetUrl,requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch the user details");
            }

            const data = await response.json();  //Response data in json format
            console.log("Logged data: ", data);  //Printing the json data

        } catch (error) {
            userdatacontainer.innerHTML = `<p>No data found</p>`; // Corrected `innerHTML`
        } finally {
            searchButton.textContent = "Search";
            // searchButton.disabled = true; // Uncomment if needed
        }
    }

})

