

async function test(){
    console.log("start");
    await new Promise((resolve)=>{
        setTimeout(resolve,3000);
        console.log("after 3 seconds");
    })
    console.log("end");  
}

console.log("before");
test();
console.log("after");

/**
 * before 
 * start
 * after 3 seconds
 * after
 * end 
 */

async function test(){
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve,2000));
    console.log("After 2 seconds");
    console.log("end");
}
console.log("Before");
test();
console.log("After");

/**
 * output::
 * before 
 * start
 * after
 * after 2 conds
 * end  
 * /