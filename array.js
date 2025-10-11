//array

const arr = [1,2,3, 4,5];
const myheros=["ironman", "hulk", "spiderman"];
const myArr= new Array(0, 1, 2, 3, 4 ,5);
// console.log(myArr);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); //array ka first mein element add hoga 
// myArr.shift(); // first element of the array is removed 

// console.log(myArr.includes(9)); true or false
// console.log(myArr.indexOf(3)); same as above

// const newArr = myArr.join() // string bana deta hain;

// console.log(newArr);
// console.log(myArr);

//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) //

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);// original array se pura slice section hat jayega splice method mein;
console.log("C", myArr);

console.log(myn2);


///////array part 2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array ka under array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); [] ek hi array mila

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //sab ko ek hi array mein de deta hain
console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) // false
// console.log(Array.from("Hitesh")) // string ko ['H', 'i', ...]
// console.log(Array.from({name: "hitesh"})) // interesting []empty arr dega bolna hoga key ka array ya value ka array

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3)); // muliple varible ko ek sath array mein return karta hain

const myarr = [1,2,4,5]

const myarr2 = [3,6 , 7 , 8]

const myarr3 = [...myarr, ...myarr2]

console.log(myarr3)

 