// Arithmetic Operators

// const addResult = 1 + 1;
// console.log(addResult);

// const subtractionResult = 5 - 1;
// console.log(subtractionResult);

// const divisionResult = 25 / 5;
// console.log(divisionResult);

// const multiplicationResult = 6 * 6;
// console.log(multiplicationResult);

// const exponentialResult = 5 ** 2;
// console.log(exponentialResult);

// const remainderResult = 10 % 3;
// console.log(remainderResult);

// let count = 5;
// let newCount = ++count;
// console.log(newCount);

// Assignment Operators

// let num = 1;
// // let result = (num += 1);
// let result = num + 1;
// console.log(result);

// Comparison Operators

let kunlesAge = 30;
let BayosAge = "30";

// let result = kunlesAge < BayosAge;
// console.log(result);

// let name = "james";
// let result = kunlesAge == BayosAge; // Only check that the value is the same
// console.log(result);

// let result1 = kunlesAge === BayosAge; // checks that both value and data type are the same
// console.log(result1);

// let name = "james";
// let result = kunlesAge != BayosAge; // Only check that the value is the same
// console.log(result);

// let result1 = kunlesAge !== BayosAge; // checks that both value and data type are the same
// console.log(result1);

const email = "nancy@gmail.com";
const password = "";

function validateUserDetail(userEmail, userPassword) {
	if (!userEmail || !userPassword) {
		console.log("Email and Password is required!");
	} else {
		console.log("Validation was successful");
	}
}

// validateUserDetail(email, password);

// Tenary Operator
// const isLoading = true;
// isLoading ? console.log("Submitting...") : console.log("Submit");

//Spread Operator
const nancyFavFruits = ["mango", "apple", "banana"];
console.log(nancyFavFruits);

const evasFavFruits = [...nancyFavFruits, "tangerine", "watermelon"];
console.log(evasFavFruits);

const todos = [
	{
		id: 1,
		text: "Wash clothes",
	},
	{
		id: 2,
		text: "Play games",
	},
];
console.log(todos);

const newTodos = [...todos, { id: 3, text: "take shower" }];
console.log(newTodos);
