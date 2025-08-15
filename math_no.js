let score = 400;
//console.log(score)

let balance = new Number(100)
//console.log(balance)

//console.log(balance.toString())
//console.log(balance.toString().length)
//console.log(balance.toFixed(2));

//const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//=======Math=======//

console.log(Math);

console.log(Math.random()); // value between 0 to 1\
console.log((Math.random()*10) + 1 );  //+1 becoz excluding 0.98779987something
console.log((Math.round(Math.random()* 10)) + 1 ) // also use ceil & floor value too

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min+1)) + min);
