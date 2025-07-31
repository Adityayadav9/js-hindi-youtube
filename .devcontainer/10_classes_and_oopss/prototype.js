// // let myName = "hitesh       "
// // console.log(myName.length);  //o/p - 13
// let myName = "hitesh      "
// let myChannel = "chai    "
// console.log(myName.trim().length); //o/p - 6
// console.log(myName.truelength);  // o/p. - undefined






let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}
Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`)
}


// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance

const User = {
    name: "chai",
    email:" chai@google.com",
}
const Teacher ={
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport={
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport,
    
}

Teacher.__proto__ = user;


// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chai aur code     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()









