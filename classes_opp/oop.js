const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// this keyword use karne se har bhar new object{} create hota hain

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
//step1 = new object{} create hota hain\
//step2 = consruction function call hota hain new keyword ke wajah se yeh karat hain jitne bhi argumnet hota hain usko usme daal deta hain
//step3 = this keyword se sab argument object mein mil jata hain 
//step4 = milta hain 
console.log(userOne.constructor);
//console.log(userTwo);