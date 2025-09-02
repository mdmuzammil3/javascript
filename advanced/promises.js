//phela tarika likhne ka promise
const promiseOne = new Promise(function (resolve, reject){
    //db an async task
    //db calls, cryptography, network
    setTimeout(() => {
        console.log('async task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//dusra tarika likhne ka prosime
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    } , 1000)

}).then(function(){
    console.log("async 2 consumed");
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "rajkhan", email:"muzz@gmail.com"})
    }, 1000)

})

promiseThree.then(function(user){ // function ka ander varible hai kuch bhi naam ho sakta user , mail, anything
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "muzammil", password: "1234"})
        }
        else{
            reject("ERROR: Something Went Wrong")
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})  

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "javascript",  password: "12345"})
        }else{
            reject('ERROR: JS went wrong ')
        }
    }, 1000)
}) 

async function consumepromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumepromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch{
//         console.log("E:", error)
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all ytcannel = yahu baba se padh liya
// yes this is also available, kuch reading aap b kro.