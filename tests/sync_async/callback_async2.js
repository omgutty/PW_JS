const { TIMEOUT } = require("node:dns");




function one(){
setTimeout(function(){
    console.log("test 1")
},2000);
}

function two(){

setTimeout (()=>console.log("test 2"),3000);

}
one();
two();

let a=function (){
     console.log("tset 3")
};
setTimeout(()=>{a();},2000);


let b= ()=> console.log("test 4 ");
setTimeout (function (){console.log("test 5")},1000);


