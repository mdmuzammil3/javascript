const accountId = 12455
let accountEmail = "muzz@google.com"
var accountPassword = "2345"
accountCity = "kolkata" // hosakta hai but use let mostly
let accountState;

// accountId = 65867
/*
prefer not use var 
becouse of issue in block scope and functional scope;
*/

accountEmail = "muzzstar@gmail.com"
accountPassword = "67585"
accountCity = "surat"

console.log(accountId)
console.table([accountId, accountEmail , accountPassword, accountCity, accountState])

const RandomNumber = parseInt(Math.random() * 100 + 1)

console.log(RandomNumber)
