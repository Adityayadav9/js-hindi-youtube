const user={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log( "Got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this)
    }
};
// console.log(user.username);
// console.log(user.getUserDetails());
// user. getUserDetails(); // if  if you want to avoid undefined:
// // Either don’t use console.log(...) while calling it, or make the function return something:
// console.log(this);
function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    return this;
}
const userOne = new User("hitesh", 12, true)
const userTwo =new  User("chaiAurCode", 11, false)
// console.log(userOne); 
// console.log(userTwo);
console.log(userOne.constructor);//  constructor property refernce hoti hai  
// khud hi ke baare me (user ke baare me)
//  what is instance of function
 function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true

