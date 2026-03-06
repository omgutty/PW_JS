
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

//async and awit

async function Dbflow(){
    try {
    await connecttoDB();
    await fetchingthedata();
    await validatedata();
    await disconnecttheDB();
    }catch(error){
        console.log(error);
    }
}

Dbflow();
