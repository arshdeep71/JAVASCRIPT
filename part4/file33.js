// This is Object
// const student = {
//     name: "Arsh",
//     age : 20,
//     city:"Jalandhar"
// }


//DESTRUCTURING OBJECT AND WITH EXACT PROPERTY NAMES
// const{name,age}=student;
// console.log(name)
// console.log(age)


//ANOTHER WAY OF DESTRUCT OBJECT
// const {name:userName} = student;
// console.log(userName); 



//DEFAULT VALUE IF NOT PROVIDED FOR OBJECT
// const {city = "Amritsar"} = student;
// console.log(city); 
           


const student = {
    name: "Arsh",
    age : 20,
    marks:{
        math:60,
        science:90
    }
}

const{marks}=student
console.log(marks);

const{marks:{math}}=student;
console.log(math);