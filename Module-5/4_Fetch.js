
// fetch Example


fetch('https://randomuser.me/api/') //request
// gete the response
.then((response) => {
    return response.json(); //will get the response in json format(also -> .text())
})
// handel the response
.then( (data) => {
    console.log(data);
})
// catch if any error occured
.catch((error) =>{
    console.log("Error occured");
})
// finally will execute always
.finally( () => {
    console.log("The response will either resolve or reject.");
})