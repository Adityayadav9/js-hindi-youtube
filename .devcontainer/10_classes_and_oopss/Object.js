//  learning about the function , object, array, null relation

function multipleBy5(num){
    this .num = num
    return num*5
}

multipleBy5.power = 2
// function is also an object
console.log(multipleBy5(5)); // o/p - 25
console.log(multipleBy5.power); //o/p= 2 
console.log(multipleBy5.prototype); //o/p- {}
// by this we understand that all the things are object 
// and function is not only function but also objects
// prototype inheritance
function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
   this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new  createUser("chai",25)
const tea = new createUser("tea", 250)


chai.printMe()


