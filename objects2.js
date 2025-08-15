//singleton

//const tinderUser = new Object();
const tinderUser= {}

tinderUser.id = "123abc"
tinderUser.name = "muzammil ansari"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "mdm9585@gmail.com",
    fullName : {
        username: {
            fisrtName : "muzammil",
            lastName: "ansari",
    }
   }
}

// console.log(regularUser.fullName.username.fisrtName)

const obj1 = {1: "A", 2:"B"}
const obj2 = {3: "C", 4:"D"}
const obj4 = {5: "E", 6:"F"}


//const obj3 ={obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2} //sperade operation

// console.log(obj3); 

const user = [
    {
        id : 1,
        email: "h@gmail.com"
    },
    {
        id : 2,
        email: "m@gmail.com"
    },
    {
        id : 3,
        email: "j@gmail.com"
    },
]

// console.log(user[0].id)

//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "muzammil"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
//console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
