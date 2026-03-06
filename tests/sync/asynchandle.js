//impliement the code in function and call it in sequal way 

function connecttoDB(callback){
    setTimeout(()=>{
        console.log("connect to DB");
        callback();
    }
    ,4000)
}

function fetchdata(callback){
    setTimeout(()=>{
        console.log("Fetcht the data");
        callback();
    }
    ,20000)
}

function validatedata(callback){
    setTimeout(()=>{
        console.log("validate the data");
        callback();
    }
    ,1000)
}

function closetheconnection(callback){
    setTimeout(()=>{
        console.log("close the connection");
        callback();
    }
    ,1000)
}

// we are calling the empty function, and it will be same as exeuction flow , we are not linked here. 
/**
connecttoDB(()=>{});
fetchdata(()=>{});
validatedata(()=>{});
closetheconnection(()=>{});
*/

//call
connecttoDB(()=>{
    fetchdata(()=>{
        validatedata(()=>{
            closetheconnection(()=>{
                console.log("data operation are completed.")
            });
        });
    });
});
