/*
console.log("connecting the DB");
console.log("fetching the data");
console.log("verify the data");
console.log("disconnecting the DB");



setTimeout(()=> console.log("connecting the DB"),2000);
setTimeout(()=> console.log("fetching the data"),2000);
setTimeout(()=> console.log("verify the data"),2000);
setTimeout(()=> console.log("disconnecting the DB"),2000);
*/

function connectingthedb(callback){
    console.log("connecting the DB");
    callback();
}
function fetchingthedata(callback){
    console.log("fetching the data");
    callback();
    
}
function verifythedata(callback){
    console.log("verify the data");
    callback();
}
function disconnecttheDB(){
    console.log("disconnecting the DB"); 
}

//for disconnecting the db we are not calling anythign, as it is laststep

//calling the functions
//below is not calling wrong way
//connectingthedb(fetchingthedata(verifythedata(disconnecttheDB)));

connectingthedb(function(){
        fetchingthedata (function(){
            verifythedata(function(){
                disconnecttheDB();
            })
        })
    }
);


//with arrow function 
connectingthedb(()=>
    fetchingthedata(()=>
        verifythedata(()=>
            disconnecttheDB()
        )
    )
);