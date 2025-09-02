const coding = ["java", "cpp", "py", "rb", "js"]
// coding.forEach( function (val){ forEach mein callback fn lagta hain callback fn ka koi name nahi hota hain
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) alag se bhi function likh sakte hain

// coding.forEach( (item, index, arr)=> { ForEach ka ander ek se zyda parameter hota hain 
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
