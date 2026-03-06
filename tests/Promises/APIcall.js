//real time usage of the await and async, 

//to use awit, function should be async // below api is blocked in my lap due to proxy. so error is throughing.
async function apicall(){
    
    //try{
    console.log("Fetching the data from API ")
    let jsonload = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let output=await jsonload.json();
    console.log("Title of the page is :" + output.title);
    
   
}
apicall();
