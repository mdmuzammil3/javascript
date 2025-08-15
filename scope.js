//var c =300;
let a =100
if( true){
let a=10;
const b = 20;
c = 30;
// console.log("INNER", a);

}
// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "muzammil"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two();

}

// one ()

if(true){
    const username = "muzzx"
    if (username=== "muzzx"){
      const website = "youtube"
      //console.log(username + website)  
    }
    // console.log(website);

}
// console.log(username);

function addOne (num){
    return num+1;
}

addOne(5)

const addTwo = function(num){ // expression function
    return num+2
}

addTwo(6) // agar isko upar le jaye toh error show hoga qk function ko variable mein hold kiya hain iskiye jisko hosting bhi bolte hain
