//Hoisting
// console.log(name);
// var name = "John";


//var name
console.log(name);
name = "John";


//hoisting with let and const
console.log(name)
let name = "John";


//functions are fully hoisted
//greet()
// //function greet(){
//     console.log("Hello World");
// }



var greet = () => {
    console.log("Hello World")
}
greet()

