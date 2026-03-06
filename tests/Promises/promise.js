//const { resolve } = require("node:dns");

let prm= new Promise(()=>{
    console.log("this is executor function ");
});
console.log(prm);


let prm2= new Promise((resolve)=>{
    console.log("this is executor function 2 ");
    resolve("success");
});
console.log(prm2);

let prm3= new Promise((reject)=>{
    console.log("this is executor function 3");
    reject("failure");
})
console.log(prm3);

let prm4= new Promise((resolve, reject)=>{

    let falg= true;
    console.log("this is executore function 4");
    if (falg){
        resolve("falg is true ");
    }else {
        reject(" falg is false");
    }
});

console.log(prm4); // if we are not calling prm4 alos it will execute 

prm4
.then((p)=>console.log(p))
.catch((f)=>console.log(f))
.finally()