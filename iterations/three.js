//for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     if(greet == " "){
//         continue;
//     }
//     console.log(`each char is ${greet}`);
    
// }

//Maps(no duplicate value)

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key); // key lene se alag alag array ata hain 
    // console.log(key, ':-', value);
    
}

const myobject= {
    'game1': "nfs",
    'game2': "fifa",
    'game3': "wwe"
}

// for (const [key, value] of myobject) {
//     console.log(key, ':-', value);
    
// }object is not iterable in forof loop 
