numbers = [5,3,6,1]

// forEach → to iterate over array elements (no return)
// numbers.forEach((number) => {});      -------> SYNTAX
// numbers.forEach(n => console.log(n * 2));



// map → to transform each element and return new array
// numbers.map(() => {});                -------> SYNTAX
// const newArray = numbers.map((number)=>{
//     return number+1;
// })
// console.log(newArray)



// filter → to select elements based on condition
// numbers.filter(() => {});           -------> SYNTAX
// let greaterThan3 = numbers.filter((number) => number > 3);
// console.log(greaterThan3);



// find → to find first element that matches condition
// numbers.find(() => {});          -------> SYNTAX
// let firstGreaterThan3 = numbers.find(n => n > 3);
// console.log(firstGreaterThan3);


// reduce → to combine all values into one result
// numbers.reduce(() => {});        -------> SYNTAX
// let sum = numbers.reduce((total, n) => total + n, 0);
// console.log(sum);



// number.some(()=>{})             --------> SYNTAX
// let marks = [78,50,90,20]
// const result = marks.some((mark)=>{
//     return mark>80
// })
// if(result){
//     console.log("pass");
// }
// else{
//     console.log("Fail");
// }


// number.every(()=>{})             --------> SYNTAX
let marks = [78,50,90,20]
const result = marks.every((mark)=>{
    return mark>80
})
if(result){
    console.log("pass");
}
else{
    console.log("Fail");
}