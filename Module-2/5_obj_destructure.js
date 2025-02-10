// De-Structure of Objects

const course = {
    C_name: "JS Hindi",
    price: 1000,
    C_Instructor: "Hitesh"
}
console.log(course.C_Instructor);

// Destructuring way => destructure the object name
const {C_Instructor: C_Ins} = course  //you can coustomise and use the keys any where in the  program 
// without using any obj name and (.) operator
console.log(C_Ins);
