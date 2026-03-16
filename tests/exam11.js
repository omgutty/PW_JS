//JavaScript – Destructuring and Objects 
/**
 * 
let person = {name:'Tom', age:30}; let {name} = person; console.log(name); 

let person = {name:'Tom', age:30}; let {age} = person; console.log(age); 

let person = {name:'Tom'}; let {salary} = person; console.log(salary); //undefined

let person = {name:'Tom'};let {age=25} = person; console.log(age); //25


let user = {name:'Priya'};  
function show({name}) { console.log(name); }  
show(user);// priya


let obj = {name:'John'}; 
let {name:username} = obj;
console.log(username); //John


let obj = {name:'Ram', ages:10};  
console.log(obj.age);// undefined

let product = {item:'Laptop'}; 
function show(p) { console.log(p.item); } 

show(product); //Laptop

let places = {name:'USA'};
function test({name}) { console.log(name); } 
test(places); 
//USA



let arr = [{name:'A'}, {name:'B'}]; 
arr.forEach(function(obj) { console.log(obj.name); }); 

A B


let person = {name:'Tom', age:20}; let {____, ____} = person

name, age


let obj = {name:'Priya'}; let {name:____} = obj 
 * 
 */





