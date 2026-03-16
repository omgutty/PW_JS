// // let p = Promise.resolve(10);

// // p.then(value => console.log(value));


// // console.log("Start");

// // Promise.resolve().then(()=>{
// // console.log("Promise");
// // });

// // console.log("End");

// // Promise.resolve(5)
// // .then(x => x * 2)
// // .then(x => console.log(x));


// Promise.resolve(10)
// .then(x => {
// throw new Error("fail");
// })
// .catch(err => console.log("Caught"));


// Promise.resolve("Hello")
// .then(res => {
// console.log(res);
// return "World";
// })
// .then(res => console.log(res));


// Promise.resolve(1)
// .then(x => x + 1)
// .then(x => x + 1)
// .then(console.log);



// Promise.resolve(5)
// .then(x => {
// console.log(x);
// });


// Promise.resolve()
// .then(()=>console.log("A"))
// .then(()=>console.log("B"));



// Promise.resolve("Hello")
// .then(res=>{
// console.log(res);
// return "World";
// })
// .then(res=>console.log(res))


// Promise.resolve(5)
// .then(x=>{
// throw new Error("Fail");
// })
// .catch(err=>console.log("Caught"));

// Promise.resolve(5)
// .then(x=>{
// console.log(x);
// return x*2;
// })
// .then(x=>console.log(x));

// Promise.resolve()
// .then(()=>console.log("A"))
// .then(()=>console.log("B"))
// .then(()=>console.log("C"))


// Promise.resolve(5)
// .then(x=>console.log(x))
// .then(()=>console.log("Done"));

// Promise.resolve("JS")
// .then(x=>{
// console.log(x);
// })
// .catch(()=>console.log("Error"));


// Promise.resolve(2)
// .then(x=>x*3)
// .then(x=>x*4)
// .then(console.log);


Promise.resolve("Hello")
.then(x=>{
console.log(x);
throw "Error";
})
.catch(e=>console.log(e));