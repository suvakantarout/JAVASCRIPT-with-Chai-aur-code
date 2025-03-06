
// fetch Example
fetch('api.github/users/suvakanta rout') //request
// gete the response
.then((response) => {
    return response.json();
})
// handel the response
.then( (data) => {
    console.log(data);
})
.catch((error) =>{
    console.log("Error occured");
})
.finally( () => {
    console.log("The response will either resolve or reject");
})