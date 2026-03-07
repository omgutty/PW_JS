//calling all async functionas with promise all 


//crataed async function with promise init and time stamp  after 2 seconds, 

//import { resolve } from "node:dns";

async function getuserdetails(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
          //  console.log("getting the user name ");
            resolve("username is : om");
        },2000);
    })
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function getobject() {
    
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({id:7,name:"om"});
    },2000);
   })
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


async function arrayofobject(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {id:7,name:"om"},
                {id:8,name:"kit"},
                {id:9,name:"Tan"}
            ])
        },2000)
    })
}

//here we are not used await, which means these below functions are returning the promise,
//we are not not executing we are callling and storing, promise state is pending here, resolve will not run
let userdetails =   await getuserdetails();
let object= await  getobject();
let arrayobject=  await arrayofobject();

//if we put await in above one by one it will pring, 
//if we put wait , it wil execute here only, so this will have values . 
// if we put await, promise.all will take the values and pring, it will execute here 
//and send the value to promose.all 
// promoise all will take both values and promise as well (disadvantage of promise all )

//to call all in parallel we are using promie  all 

let [userd,objecd,arayobjectd] =  Promise.all([userdetails,object,arrayobject]);
console.log(userd,objecd,arayobjectd);


