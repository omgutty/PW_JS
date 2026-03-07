//crataed async function with promise init and time stamp  after 2 seconds, 

import { resolve } from "node:dns";

async function getuserdetails(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("getting the user name ");
            resolve("username is : om");
        },2000);
    })
}

//calling the function with await and storing in variable 
let result =  await getuserdetails();
console.log(result);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function getobject() {
    
   return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({id:7,name:"om"});
    },2000);
   })
}

let result2= await getobject();
console.log(result2.id);

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

let result3= await arrayofobject();
console.log(result3);
//console.log(result3[1]);
