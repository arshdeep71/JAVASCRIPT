function getStudentInfo(){
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
        const result = {
            name : "Arshdeep Singh",
            email : "arshdeepsingh@gmail.com",
            age: 21,
        }
        resolve(result);
    },2000)
})
}
function displayInfo(user){
    const{name}=user;
    console.log(name);

}
async function main() {
    const result = await getStudentInfo();
    displayInfo(result);
    console.log("Program Completed Successfully");
}
main()
//getStudentInfo should return object name, email and age