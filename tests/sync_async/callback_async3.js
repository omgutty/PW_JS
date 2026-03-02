function one (){
    console.log("one");
}

function two (){
    console.log("two");
}

function three (){
    console.log("three");
}

one();
two();
three();
console.log("------");
function four(callback){
    console.log("four");
    callback();
}

function five(callback){
    console.log("five");
    callback();
}

function six(){
    console.log("six");
}

four(()=>{
    five(()=>{
        six();
    })
})

console.log("-----");
setTimeout(()=>{
    console.log("seven");
},2000);




/*
let a1=function a(){
    setTimeout(() => {
      one()
    }, 2000);
}



setTimeout(() => {
    one();
    setTimeout(()=>{
        two();
        setTimeout(()=>{
            three();
        },2000);
    },2000);
}, 2000);


one(()=>{
    setTimeout(() => {
        two(()=>{
            setTimeout(()=>{
                three(()=>{
                    setTimeout(() => {
                        console.log("1,2,3")
                    }, 2000);
                },2000)
            },2000)
        })
    }, 2000);
})
*/

