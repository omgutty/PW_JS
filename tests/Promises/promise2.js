//promise inside the function and calling with promise chaninging. 
// same thinkg with two parameters - check file convertCB_Prm.js


function connecttoDB(){
   return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("connectTo DB");
            resolve("[LOG]:: DB connected");
        },5000);
    })
}


function fetchingthedata()
{
    return  new Promise((resolve)=>{
        setTimeout (()=>{console.log("fetching the data");
        resolve("[LOG]:: data is fetched");
    },10000);
    })
}

function validatedata (){
    return new Promise((resolve)=>{
        setTimeout (()=>{console.log("Validating the data");
        resolve("[LOG]:: Data validated"); 
    },5000);
    })
} 

function disconnecttheDB(){

    return new Promise ((resolve)=>{
    setTimeout (()=>{console.log("disconnect the DB");
    resolve("[LOG]:: DB disconnected");
    },3000);
    })
}


//this is call Promise Chaining 

connecttoDB()
.then(fetchingthedata)
.then(validatedata)
.then(disconnecttheDB)
.then(()=>console.log("operations are done"))
.finally(()=>console.log("close the connection "));
