const user ={
    username : "muzammil",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "raj"
//     console.log(this.username)
// }
// chai() => undefiend

// 

// const chai =  () => {
//     let username = "muzzammil"
//     console.log(this); // {}    this.username => undefiend
// }

// chai();

// const addTwo = ( num1, num2 ) => { implicets return
//     return num1 +num2 curly braces mein return lijhna parta hain hain
// }

// console.log(addTwo(3, 4))

// const addTwo = ( num1, num2 ) =>  num1 +num2   yahan return nahi niklna parta hain explictes return
// const addTwo = ( num1, num2 ) =>  (num1 +num2)

const addTwo = ( num1, num2 ) =>  ({username: "muzaamil"})


console.log(addTwo(3, 4))

const myaArr = [1, 2, 3, 4 ,5]

myaArr.forEach(() => {})