function one (){
    console.log("one");
}

function two (){
    console.log("two");
}

function three (){
    console.log("three");
}

one();
two();
three();
console.log("------");
function four(callback){
    console.log("four");
    callback();
}

function five(callback){
    console.log("five");
    callback();
}

function six(){
    console.log("six");
}

four(()=>{
    five(()=>{
        six();
    })
})

console.log("-----");
//simple set time out method 
setTimeout(()=>{
    console.log("seven");
},2000); 

//Function wrapping setTimeout
//Pass setTimeout Inside a Function
function eight(){
    setTimeout(()=>{
        console.log("eight");
    },2000);
}
eight(); // it will print eight after 2 seconds 


//this will print nine, we are passing function body in call back 
//Pass setTimeout As Callback Wrapper
function nine(callback) {
    callback();
}
nine(()=>{
    setTimeout(()=>{
        console.log("nine")
    },2000);
});

//Pass Function Reference to setTimeout

function ten(){
    console.log("ten");
}
setTimeout(ten,2000);


let ten1= function ten1(){
    console.log("ten 1");
}
setTimeout(ten1,2000);



//call 

function eleven(twelve){
   
    setTimeout(()=>{
        console.log("eleven");
    },4000); 
      
    //console.log("eleven");
    twelve();
}

function twelve(){
    setTimeout(()=>{
        console.log("twelve");
    },5000);
}


//twelve();// this only prints tweleve 
eleven(twelve);///this prints, eleven and twelve

eleven(()=>{
    twelve();
}) 
//  second calling is , calling second method as anonymous


function thirteen(callback){
    setTimeout(() => {
        console.log("Thirteen method");
        callback();
    }, 5000);
}

function fourteen(callback){
    setTimeout(()=>{
        console.log("fourteen method");
        callback();
    },7000);
}

//call above two methods, wait for 13 to complete and then start 14.


thirteen(()=>{
    fourteen(()=>{
        console.log("13,14 is executed");
    })
})















/*
let a1=function a(){
    setTimeout(() => {
      one()
    }, 2000);
}



setTimeout(() => {
    one();
    setTimeout(()=>{
        two();
        setTimeout(()=>{
            three();
        },2000);
    },2000);
}, 2000);


one(()=>{
    setTimeout(() => {
        two(()=>{
            setTimeout(()=>{
                three(()=>{
                    setTimeout(() => {
                        console.log("1,2,3")
                    }, 2000);
                },2000)
            },2000)
        })
    }, 2000);
})
*/

