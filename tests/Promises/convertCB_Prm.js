//how to convert call back frunction to Promise 

//const { resolveObjectURL } = require("node:buffer");

/*
function connecttoDB(callback){
    setTimeout(()=>{
        console.log("connect to DB");
        callback();
    }
    ,4000)
} */

    
function connecttoDB(){

    //intilize promise constructir
    //tieout call back function embaded with the promise, 
    // with out storing promise to variable just returning 

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

//console.log(connecttoDB());
// here we are calling independently 
/*
connecttoDB().then((p)=>{console.log(p)});
fetchingthedata().then((p)=>{console.log(p)});
validatedata().then((p)=>{console.log(p)});
disconnecttheDB().then((p)=>{console.log(p)});
*/
connecttoDB()
    .then((mesg)=>{
        console.log(mesg);
        return fetchingthedata();
    })
    .then(
        (mesg)=>{
        console.log(mesg);
        return validatedata();
    })
    .then(
        (mesg)=>{
        console.log(mesg);
        return disconnecttheDB();
    })
    .then((mesg)=>{
        console.log(mesg);
    })
    .catch((err) => {
      console.log("Error: ", err);
     })
     .finally(()=>{console.log("--End of the program--")});