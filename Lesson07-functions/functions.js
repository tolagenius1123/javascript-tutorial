// Function is a block of code designed to perform a specific task

// Functions consist of
// 1. Function keyword
// 2. Function name
// 3. Function body

// Regular function
// function displayName(name) {
// 	console.log(name);
// }

// Arrow Function
// const displayName = (name) => {
// 	console.log(name);
// };

// displayName("Eva");
// displayName("Nancy");
// displayName("Josh");

// function addTwoNumbers(num1, num2) {
// 	console.log(num1 + num2);
// }

// const addTwoNumbers = (num1, num2, num3) => {
// 	console.log(num1 + num2 + num3);
// };

// addTwoNumbers(5, 10, 25);
// addTwoNumbers(25, 25, 10);

// const findSquareRootOfAnyNumber = (num) => {
// 	const result = num ** 2;
// 	return console.log(result);
// };

// const findSquareRootOfAnyNumber = (num) => console.log(num ** 2);

// findSquareRootOfAnyNumber(5);
// findSquareRootOfAnyNumber(6);
// findSquareRootOfAnyNumber(7);

// GLOBAL SCOPE
// const emailAddress = "nancy@gmail.com"; // Global variable

// const displayMessage = (message) =>
// 	console.log(`The user's email is ${message}`);

// const validateEmailAddress = (userEmail) => {
// 	let username = "tolaboy"; // Local variable
// 	const isValid = userEmail.includes("@");
// 	return console.log({ isValid, username });
// };

// const purchasedProducts = [
// 	{
// 		productId: 1,
// 		productName: "Onions",
// 		productPrice: 1000,
// 	},
// 	{
// 		productId: 2,
// 		productName: "Tomatoes",
// 		productPrice: 5000,
// 	},
// 	{
// 		productId: 3,
// 		productName: "Pepper",
// 		productPrice: 3000,
// 	},
// ];

// const expectedBudget = 6000; // Global Scope

// const expenseTracker = (listOfItems, budgetedAmount) => {
// 	let totalAmount = 0; // Local Scope
// 	listOfItems.map((item) => (totalAmount = totalAmount + item.productPrice));

// 	console.log({ amountBudgeted: budgetedAmount, amountSpent: totalAmount });
// 	if (totalAmount > budgetedAmount) {
// 		let errorMessage = "Oops!!! We exceeded our budget"; // Block Scope
// 		console.log(errorMessage);
// 	} else {
// 		let successMessage = "Nice Job!!!, we successfully managed our expense"; // Block Scope
// 		console.log(successMessage);
// 	}
// };

// displayMessage(emailAddress);
// validateEmailAddress(emailAddress);
// expenseTracker(purchasedProducts, 5000);

// reponseCode = 200;

// function fetchData(statusCode) {
// 	try {
// 		statusCode === 200 && console.log("Success");
// 		console.log(responseCode);
// 	} catch (error) {
// 		console.log("Caught an error");
// 		console.log(error);
// 	}
// }

// fetchData(responseCode);

// const numerator = 100,
// 	denominator = "a";

// try {
// 	console.log(numerator / denominator);

// 	// forgot to define variable a
// 	console.log(a);
// } catch (error) {
// 	console.log("An error caught");
// 	console.log("Error message: " + error);
// 	throw error;
// }

import { displayMessage } from "./utility.js";
import { multiplyTwoNumbers } from "./utility.js";

displayMessage("I just called my display utility function");
multiplyTwoNumbers(5, 5);
