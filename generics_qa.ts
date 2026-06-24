//MODERN
//1. What are generics and how are they used in automation?

/**
 * generics used in reusable methods, where it allow us to write reusable functions, class, and utlitie that work with defined data types.
 * 
 */
//function with return type as string, 

function getstring(value:string):string{
    console.log('The person name is '+value)
    return value;
}
 
function getnumber(value:number):Number{
    return value;
}

function get(value:any):any{
    return value
}

let n = get("Om");
n.toFixed(2);

// above two lines is accepted. //run time errro : name.toFixed is not a function

function getvalueof<T>(value:T):T{
    return value;
}

getvalueof(4);
getvalueof("om");

//multiple generice

function createuser<T,S>(first:T, Second:S){
    return {first,Second}
}

const user1=createuser("om",1);
const user2=createuser(2,'kittu');

console.log(user1,user2);

