console.log("step 1");
console.log("step 2");
console.log("step 3");

console.log("step 1");
setTimeout(()=>console.log("step 2 "),1000);// wait for one sec and print 
console.log("step 3");
console.log("-------");


setTimeout(()=>console.log("connect to DB"),4000);
setTimeout(()=>console.log("Fetcht the data"),20000);
setTimeout(()=>console.log("validate the data"),1000);
setTimeout(()=>console.log("close the connection"),1000);


//all above steps are indepented then it wil be finem 
// but if all steps are dependent we need to handle this 






