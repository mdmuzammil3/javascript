const myObject = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift : "swift in apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const prog = ["cpp", "java", "rb", "py"]

for (const key in prog) {
    // console.log(prog[key]);
} // in forin loop key print hota hain array ka key uska index hota hain

// const map = new Map()

// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATE OF AMERICA")
// map.set('FR', "FRANCE")
// map.set('IN', "INDIA")

// for (const key in map) {
//     console.log(key);
// }// map mein iteration nahi hota hain