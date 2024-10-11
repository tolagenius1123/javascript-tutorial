// An array is an object that can store multiple values at once

const ageOfStudents = [17, 18, 15, 19, 14];

// In the above example, we created an array to record the age of five students

// Why use Arrays? Arrays allow us to organize related data by grouping them within a single variable.
let fruit1 = "Apple";
let fruit2 = "Mango";
let fruit3 = "Banana";

let fruits = ["Apple", "Mango", "Banana"];

// Create an Array
// We create an array by placing elements inside an array literal [], seperated by commas.
const oddNumbers = [1, 3, 5, 7, 11];

// Access Elements of an Array
// Each element of an array is associated with a number called an index, which specifies its position inside the array
const evenNumbers = [2, 4, 6, 8, 10];

// We can use the array index to access the elements in the array.
// Array indexes always start with 0, not 1.
evenNumbers[0]; // Accesses the first element 2
evenNumbers[1]; // Accesses the second element 4
evenNumbers[2]; // Accesses the third element 6

// Array Methods
let friends = ["Tola", "Eva", "James"];

// Push() Method: The push() method adds an element at the end of the array
// friends.push("Cynthia")
// console.log(friends);

// Unshift() Method: The unshift() method adds an element at the beginning of an array
// friends.unshift("Emmanuel")
// console.log(friends);

// Splice() Method: The splice() method removes an element from a specified index of an array
// friends.splice(1, 1);
// console.log(friends);

// Find() Method: The find() method returns the first value of the array element that passes a given test
// let result = friends.find((friend) => friend !== "James");
// console.log(result);

// Includes() Method: The includes() method checks if an array contains a specified element
// let result = friends.includes("Tola");
// console.log(result);

// Slice() Method: The slice() method selects part of an array and returns it as a new array
// let newFriends = friends.slice(0, 1);
// console.log(newFriends);
