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

            const responseData = await response.json();  //Response data in json format
            console.log("Logged data: ", responseData);  //Printing the json data

        } catch (error) {
            userdatacontainer.innerHTML = `<p>No data found</p>`; // Corrected `innerHTML`
        } finally {
            searchButton.textContent = "Search";
            // searchButton.disabled = true; // Uncomment if needed
        }
    }


    // Calculating the data
    function updateProgress(solved,total,label,circle){
        const progressDegree = (solved/total) * 100;
        easy-progress.style.setProperty("--progress-degree",`${progressDegree}%`);
        mid-progress.style.setProperty("--progress-degree",`${progressDegree}%`);
        hard-progress.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    // Displaying the Data in frontend
    function displayUserData(responseData){
        // Total Questions Available (creating the path where the data is present && hold them in variales)
        const totalQues = responseData.data.allQuestionsCount[0].count;
        const totalEasy = responseData.data.allQuestionsCount[1].count;
        const totalMid = responseData.data.allQuestionsCount[2].count;
        const totalHard = responseData.data.allQuestionsCount[3].count;

        // Total Questions Solved (creating the path where the data is present && hold them in variales)
        const totalSolved = responseData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const totalEasySolved = responseData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const totalMidSolved = responseData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const totalHardSolved = responseData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        const solvedTotalQues = responseData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = responseData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMidQues = responseData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = responseData.data.matchedUser.submitStats.acSubmissionNum[3].count;


    }
    
})

