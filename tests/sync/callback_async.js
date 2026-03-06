/*
setTimeout (()=>{console.log("connecting to DB")},2000);
setTimeout (()=>{console.log("fetching the data")},10000);
setTimeout (()=>{console.log("validating the data")},2000);
setTimeout (()=>{console.log("disconnect the DB")},1000);
*/
//if we run the terminal, it will not run in order

//creating the functions to make it run in order with call back 

function connectingDB(callback){
    setTimeout (()=>{console.log("connecting to DB")
    callback();
    },2000);
    
} 

function fetchingthedata(callback){
    setTimeout (()=>{console.log("fetching the data")
    callback();
    },10000);
   
}

function validatedata(callback){
    setTimeout (()=>{console.log("validating the data")
    callback();
    },5000);
    
}

function disconnecttheDB(callback){
    setTimeout (()=>{console.log("disconnect the DB")
    callback();   
    },3000);
}


//calling the functions with arrow
connectingDB(()=>
    fetchingthedata(()=>
        validatedata(()=>
            disconnecttheDB(()=>console.log("execution completed") 
            )
        )
    )
);

//calling the function with arrow and {}

connectingDB(()=>{
    fetchingthedata(()=>{
        validatedata(()=>{
            disconnecttheDB(()=>{
                console.log("execution completed")
            })
        })
    })
});


//with ;

connectingDB(()=>{
    fetchingthedata(()=>{
        validatedata(()=>{
            disconnecttheDB(()=>{
                console.log("execution completed");
            });
        });
    });
});