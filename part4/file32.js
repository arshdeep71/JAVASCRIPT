const numbers = [10,20,30,40,50]
// let n1 = numbers[0]
// let n2 = numbers[1]
// console.log(n1);
// console.log(n2);


// DESTRUCTURING NEW METHOD OF ES6 TO EXTRACT ARRAY ELEMENTS
const [n1,n2,...n3] = numbers
console.log(n1);
console.log(n2);
console.log(n3);