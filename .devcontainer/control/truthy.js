// // const userEmail = "a@aditya.ai"
// // const userEmail = ""
// // c-3
// // const userEmail = []

// // if(userEmail){
// //     console.log("Got user email");

// // }
// // else{
// //     console.log("don't have user email");

// // }

// // if(userEmail.length === 0){
// //     console.log("array is empty")
// // }

// // // falsy values

// // // false , 0, -0, bigInt 0n, "", null, undefined, NaN(not a number)

// // // truthy values
// // //  "0", 'false' , " ", [],{}, function(){}, 
// // const emptyObj = {}
// // if(Object.keys(emptyObj).length === 0){
// //     console.log("Object is empty");
// // }


// // nullish Coalescing Operator (??) : null undefined

// // let val1;
// // //  val1 = 5 ??  10
// // //  val1  =  null ?? 10
// // val1 = undefined  ?? 15
// // // val1 = null ?? 10  ?? 20 
// //  console.log(val1);


// //  terniary operator
// // condition ? true : false
 
// const iceTeaPrice = 100
// // iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")
// iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80")







// practice
// case -1
// const userEmail = " "
// case -2
// const userEmail = []
// case - 3
// const userEmail = "a@aditya.Ai"
// const userEmail = false
const userEmail = 0

if(userEmail){
    console.log("got user email");

}
else{
    console.log("don't have user email");
}


// falsy values
// false 0, -0, "",  null, undefined, NaN, BigInt 0n
// truthy values
// "0","hello"(nonempty string), 'false' , " ", [], {}, function(){},
// -1(negative number also truthy), infinity, new Date()