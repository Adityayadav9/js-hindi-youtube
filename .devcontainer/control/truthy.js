// const userEmail = "a@aditya.ai"
// const userEmail = ""
// c-3
const userEmail = []

if(userEmail){
    console.log("Got user email");

}
else{
    console.log("don't have user email");

}

if(userEmail.length === 0){
    console.log("array is empty")
}

// falsy values

// false , 0, -0, bigInt 0n, "", null, undefined, NaN(not a number)

// truthy values
//  "0", 'false' , " ", [],{}, function(){}, 
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}