// for (initialExpression; condition; updateExpression) {
// 	// for loop body
// }

// for (let count = 1; count <= 10; count++) {
// 	console.log(count);
// }

function printAdditionTable(num) {
	for (let i = 1; i <= 10; i++) {
		let result = num + i;
		console.log(`${num} + ${i} = ${result}`);
	}
}

printAdditionTable(2);
