//Q1
let str ="123"
let result =Number(str) + 7
console.log(result);
//Q2
function checkFalsy(val) {
    return !val ? "Invalid" : val;
}
console.log(checkFalsy(0));          // Output: "Invalid"
console.log(checkFalsy(""));         // Output: "Invalid"
console.log(checkFalsy(null));       // Output: "Invalid"
console.log(checkFalsy(undefined));  // Output: "Invalid"
console.log(checkFalsy(false));      // Output: "Invalid"
console.log(checkFalsy(NaN));        // Output: "Invalid"

console.log(checkFalsy(5));          // Output: 5
console.log(checkFalsy("Hello"));    // Output: "Hello"


//Q3
for (let i = 1 ;i<= 10;i++){

    if(i %2     ==0){
        continue
    }
    console.log(i);
    
}
//Q4
let Numbers =[1,2,3,4,5]
let evenNumbers =Numbers.filter(num =>num % 2==0)
console.log(evenNumbers);

//Q5
let arr1 =[1,2,3]
let arr2 =[4,5,6]
let arr3 =[...arr1,...arr2]
console.log(arr3);

//Q6
function getDayName(daynumber){
    switch(daynumber){
        case 1:return"sunday"
        case 2 :return"monday"
        case 3:return"tuseday"
        case 4:return"wednesday"
        case 5:return"thurday"
        case 6:return"friday"
        case 7:return"satruday"
        default :return"invalid day number"

    }
   
}
 console.log(getDayName(2));
//Q7
    
let words = ["a", "ab", "abc",];
let length = words.map(word => word.length);
    console.log(length); 
    //Q8
    function checkdivisible(num) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "Divisible by both 3 and 5";
     
            return "Not divisible by either 3 or 5";
            console.log(checkdivisible(15)); // Output: "Divisible by both 3 and 5"
        }}
        //Q9
        let square = (num) => num * num;
        console.log(square(5));
        //Q10
        function formatperson(person) {
            let { name, age } = person;     
            return `Name: ${name}, Age: ${age}`;}
            const person = { name: "John", age: 25 };
            console.log(formatperson(person)); 
                    //Q11
                    let sumall =(...num) => {
                        return num.reduce((acc, curr) => acc + curr, 0);
                    };
                    console.log(sumall(1, 2, 3, 4, 5)); 
                    //Q12
                    let delaySuccess = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 3000);
    });
};

delaySuccess().then(msg => console.log(msg));
//Q13
function findMax(arr) {
    return Math.max(...arr);
}
return findMax([1, 3, 7, 2,4]);
//Q14
function getobjectkeys(obj) {
    return Object.keys(obj);
}
console.log(getobjectkeys({ name: "John", age: 30 }));
//Q15
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));

//Q1 at essay
// forEach
// 1-forEach	
// Array method	
// Works only with arrays	
// Cannot use break or continue	
// 2-for...of
// Doesn't work well with await
// Supports break, continue, and return
// Works with any iterable (arrays, strings, maps, etc.)
// Loop statement
// Use forEach:
// When looping through every array element without stopping.
// Use for...of:
// When you need break, continue, or asynchronous (await) operations.

arr.forEach(item => console.log(item));


for (const item of arr) {
    console.log(item);
}
// //Q2
// Hoisting:
// JavaScript moves declarations to the top of their scope before execution.

// var is hoisted and initialized as undefined.
// let and const are hoisted but cannot be used before declaration.

// TDZ (Temporal Dead Zone):
// The period between entering a scope and declaring a let or const variable.
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

//
// Q3//
//== (Loose Equality):

// Compares values after type conversion.

// === (Strict Equality):

// Compares both value and type.
// No type conversion.
5 == "5"   
5 === "5"  
// Q4//
// try contains code that may throw an error.
// catch handles the error without crashing the program.
try {
    let x = y;
} catch (err) {
    console.log(err.message);
}

async function getData() {
    try {
        const data = await fetch(url);
    } catch (err) {
        console.log("Request failed");
    }
}
//Q5
// Type Conversion (Explicit):
// The programmer manually changes a value's type.

Number("10");  
String(123);    

// Type Coercion (Implicit):
// JavaScript automatically converts types during operations.

"5" + 2   
"5" - 2   

// Difference:

// Conversion: Done intentionally by the programmer.
// Coercion: Done automatically by JavaScript.