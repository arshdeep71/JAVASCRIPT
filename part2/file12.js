const student = {
    name: "Arsh",
    age:21
}

// console.log(student)
// console.log(student.name)

// student.city="NYC";
// console.log(student);
// student.city="Miami";
// console.log(student);


//SPREAD OPERATOR
const obj = {...student,city:"NYC"}
console.log(obj);

const cart = {}