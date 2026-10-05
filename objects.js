//singleton
//Objects.create method

//objects literals
const mysym = Symbol("key1");

const jsUser = {
    name: "muzammil",
    email: "muzzziitian@gmail.com",
    [mysym]: "myKey1",
    Age: 22,
    isLoggedIn: false,
    LastLoggedIn: ["monday", "saturday"],

}
console.log(jsUser.name);
console.log(jsUser.Age); // zyda tar . se value access karte hain but kabhi kabhi [] se bhi karte hain
console.log(jsUser["email"]); //correct syntax 
console.log(jsUser[mysym]);
jsUser.email = "mdm687321@gmail.com"
console.log(jsUser)
//Object.freeze(jsUser); //uske baad freeze ho jayega value change nahi hoga objects

jsUser.greetings = function () {
    console.log("Hello js user")
}

jsUser.greetings2 = function () {
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetings2())
