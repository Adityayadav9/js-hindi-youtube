// for loop 

// for (let index = 0; index <= 10; index++ ) {
//     const element = index;
//     console.log(element);
    
    
// }

// for(let i=0; i<=10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");

//     }
//     console.log(element);
// }



// for(let i =0; i<=10 ; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=0; j<= 20; j++){
// // console.log(`inner loop value ${j} and inner loop ${i}`);
// console.log( i +`*`+  j + ` = ` + i*j);

//     }
// }
for(let i =1; i<=10 ; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1; j<= 20; j++){
// console.log(`inner loop value ${j} and inner loop ${i}`);
// console.log( i +`*`+  j + ` = ` + i*j);

    }
}
// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
// // for(let index =0; index<= myArray.length; index++){
// // for(let index =0; index< myArray.length; index){
// for(let index =0; index< myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);
// }
// console.log(myArray.length);
 

// break and continue
// ///////// break

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`Value of index is : ${index}`);
    
// }
for (let index = 0; index < 20; index++) {
    // const element = array[index];
    if(index == 5){
        console.log(`5 detected`);
        continue
    }
    console.log(`value of index is : ${index}`)
    
}