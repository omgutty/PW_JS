//callBack Hell/Sync/Async executions in JS


// console.log("Program Start");

// setTimeout(() => {
//     console.log("Inside setTimeout (Asynchronous)");
// }, 2000);

// console.log("Program End");


 //Convert the following callback code into async/await format:

// function fetchData(callback){
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// function fetchData(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function getData(){
//   let result = await fetchData();
//   console.log(result);
// }

// getData();

function sum(a,b){
  return a+b;
}

function calculate(callback){
  console.log(callback(2,3));
}

calculate(sum);


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


function fetchData(callback){
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}