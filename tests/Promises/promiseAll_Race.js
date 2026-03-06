
//in promiseone variable = what it will  be there?ans  promise 

let promiseone=new Promise((resolve)=>{
    setTimeout(()=>{
       // console.log("Promise 1 ");
        resolve(" Promise 1 resolved");     
    },2000);
})
let promisetwo=new Promise((resolve)=>{
    setTimeout(()=>{
       // console.log("Promise 2");
        resolve(" Promise 2 resolved");     
    },3000); 
})
// if we want to catch the erject, stil we need to pass resolve and reject, this is disadvantage.  
let promisethree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // console.log("Promise 3 fail");
        reject(" Promise 3 rejected");     
    },5000); 
})
Promise.all([promiseone,promisetwo,promisethree])
.then((result)=>console.log(result))
.catch(error=>console.log(error));


// in this order promise three is failed, so, even though 1,2 are taking lesstime. 
// promise 3 reject will print, and 1,2 not 
Promise.all([promiseone,promisetwo,promisethree])
.then((result)=>console.log(result))
.catch(error=>console.log(error));


// in race, which ever runs first, that result will show, 
// that will win the race, resolve/reject 

Promise.race([promiseone,promisetwo,promisethree])
.then((result)=>console.log(result))
.catch((error)=>console.log(error));
