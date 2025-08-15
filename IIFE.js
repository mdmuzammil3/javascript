//Immediately Invoked Function Expressions (IIFE)

(function chai (){
    //NAME IIFE
    console.log(`DB Connected`)
})();

// global scope(varible) polution bachne ke liye iife ka use karte hain

((name) => {
    //UNNAMED IIFE
    console.log(`DB CONNENTED TWO ${name}`)
})("muzammil");