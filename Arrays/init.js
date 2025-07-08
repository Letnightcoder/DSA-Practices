// Array Square Brackets
// Array of Strings & Numbers
let myName = "Kallol";
console.log(myName);

let myNamesArray = ["Kallol", "Kumar", "Rahul", "Akash", "Pankaj"];
console.log(myNamesArray);

let myNumbersArray = [1, 2, 3, 4, 5];
console.log(myNumbersArray);


// Array of Objects
let myObj = {
    name: "Kallol",
    age: 20
}
console.log(myObj);

let students = [
    {
        name: "Kallol",
        age: 20
    },
    {
        name: "Kumar",
        age: 22
    },
    {
        name: "Rahul",
        age: 18
    }
]
console.log(students);

// Array Constructor
let arrayConstructor1 = new Array();
arrayConstructor1[0] = "Kallol";
arrayConstructor1[1] = "Kumar";
arrayConstructor1[2] = "Rahul";
console.log(arrayConstructor1);

let arrayConstructor2 = new Array("Kallol", "Rahul");
console.log(arrayConstructor2);

// Array fill
let arrayFill = new Array(5).fill("Kallol");
console.log(arrayFill);


// Array of  
let ofArray = Array.of("Kallol", "Rohan", "Rahul");
console.log(ofArray);


// Array from
let fromArray = Array.from("Hello");
console.log(fromArray);


// Sparse Array: Array with empty values
let sparseArray = [4, , 6, , , 5];
console.log(sparseArray);
sparseArray[3] = 18;
console.log(sparseArray);


// Using Spread operator (...)
let spreadArray = ["plus", ...ofArray];
console.log(spreadArray);

// Dynamic Array
let dynamicArray = [12, "Kallol", { name: "Rahul"}];
console.log(dynamicArray);


// Destructuring Assignments
let fruits = ["apple", "banana", "cherry"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

let [fruit11, fruit22, fruit33] = fruits;
console.log(fruit11, fruit22, fruit33);


// Iterating over an Arrays - Iterating meaning going over elements of an array one by one

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for of loop
for (let fruit of fruits) {
    console.log("For of", fruit);
}
// for in loop
for (let index in fruits) {
    console.log(index, fruits[index]);
}
// forEach loop
fruits.forEach((fruit) => {
    console.log("forEach", fruit);
});


// Common Array methods

// push - adds an element to the end
fruits.push("mango");
console.log(fruits);

// pop - removes an element from the end
fruits.pop();
console.log(fruits);

// shift - removes an element from the beginning
fruits.shift();
console.log(fruits);

// unshift - adds an element to the beginning
fruits.unshift("mango");
console.log(fruits);

// splice - removes an element from the middle
fruits.splice(1, 2);
console.log(fruits);

// slice - returns a new array
let newFruits = fruits.slice(1, 3);
console.log(newFruits);

// includes - returns true or false
console.log(fruits.includes("apple"));

// indexOf - returns the index of the element
console.log(fruits.indexOf("apple"));

// lastIndexOf - returns the last index of the element
console.log(fruits.lastIndexOf("apple"));

// find - returns the element
console.log(fruits.find((fruit) => fruit === "apple"));

// findIndex - returns the index
console.log(fruits.findIndex((fruit) => fruit === "apple"));

// filter - returns an array of filtered elements
console.log(fruits.filter((fruit) => fruit === "apple"));

// map - returns an array of mapped elements
console.log(fruits.map((fruit) => fruit + " is a fruit"));

// reduce - returns a single value
console.log(fruits.reduce((acc, fruit) => acc + fruit, ""));

// sort - returns a sorted array
console.log(fruits.sort());

// reverse - returns a reversed array
console.log(fruits.reverse());

// join - returns a string of joined elements
console.log(fruits.join(" - "));

// concat - returns a new array of concatenated elements
console.log(fruits.concat("orange"));

// slice - returns a new array of sliced elements
console.log(fruits.slice(1, 3));


// Array in array
let arrayInArray = [[1, 2], [3, 4]];
console.log(arrayInArray);