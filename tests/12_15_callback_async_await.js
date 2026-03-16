//callBack Hell/Sync/Async executions in JS


// console.log("Program Start");

// setTimeout(() => {
//     console.log("Inside setTimeout (Asynchronous)");
// }, 2000);

// console.log("Program End");


 //Convert the following callback code into async/await format:

function fetchData(callback){
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

function fetchData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function getData(){
  let result = await fetchData();
  console.log(result);
}

getData();

