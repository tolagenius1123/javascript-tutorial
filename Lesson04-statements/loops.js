// for loop
// The syntax of for loop
// for (initialExpression; condition; updateExpression) {
// for loop body
// }

// for (let count = 1; count <= 10; count++) {
// 	console.log(count);
// }

// function printAdditionTable(num) {
// 	for (let i = 1; i <= 10; i++) {
// 		let result = num + i;
// 		console.log(`${num} + ${i} = ${result}`);
// 	}
// }

// printAdditionTable(2);

// while loop
// while loop repeatedly executes a block of code as long as the condition is true

// The syntax of while loop
// while (condition) {
// 	body of loop
// }

// let count = 1;

// while (count <= 10) {
// 	console.log(count);
// 	count++;
// }

// let num = 5;

// while (count <= 12) {
// 	const result = num * count;
// 	console.log(`${num} x ${count} = ${result}`);
// 	count++;
// }

// let isLoading = true;

// while (isLoading) {
// 	console.log("We have an infinite loop");
// 	count++;

// 	if (count === 20) {
// 		break;
// 	}
// }

// for (let i = 1; i <= 5; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	}

// 	console.log(i);
// }

let grade = "B2";
let score = 70;
let message = "";

switch (score) {
	case 70:
		message = "Excellent!, you got an A 👍";
		console.log(message);
		break;
	case 60:
		message = "Good Job!, you got a B2 👍";
		console.log(message);
		break;
	default:
		message = "You failed❌";
		console.log(message);
}
