

function sendemailafterorder(email){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("eamil is sent to :"+email);
        },2000);
    })
}

//if we use await in below, it will run parallel, 
// if we not use await, sequence 
console.log( await sendemailafterorder("om.gutty@gmail.com"));
console.log("Order confirmation number displayed on screen ");