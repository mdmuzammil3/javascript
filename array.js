//array

const arr = [1,2,3, 4,5];
const myheros=["ironman", "hulk", "spiderman"];
const myArr= new Array(0, 1, 2, 3, 4 ,5);
// console.log(myArr);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); //first mein element add hoga array ka
// myArr.shift(); // first element of the array is removed 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // string bana deta hain;

// console.log(newArr);
// console.log(myArr);

//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);

console.log(myn2);



 