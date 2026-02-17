function f1(x) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(x%2 === 0) {
            resolve(x +" is Even number ");
        }
        else{
            reject(x + " is Odd Number and it is Not Allowed");
        }
        resolve()
    },3000)
  });
}
async function main(){
    let num = Math.round(Math.random()*10);
    try{
    const a =  await f1(num);
    console.log(a);
    console.log("Program Completed Successfully");
    }catch(err){
        console.log(err);
    }
}
main();