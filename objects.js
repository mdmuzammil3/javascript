//singleton
//Objects.create

//objects literals
const mysym = Symbol ("key1");

const jsUser = {
    name : "muzammil",
    email : "muzzziitian@gmail.com",
    [mysym] : "myKey1",
    Age : 22,
    isLoggedIn : false,
    LastLoggedIn : ["monday", "saturday"],

}
console.log(jsUser.name);
console.log(jsUser.Age);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);
jsUser.email = "mdm687321@gmail.com"
console.log(jsUser)
//Object.freeze(jsUser); //uske baad freeze ho jayega value change nahi hoga objects

jsUser.greetings = function(){
    console.log("Hello js user")
}

jsUser.greetings2 = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetings2())
