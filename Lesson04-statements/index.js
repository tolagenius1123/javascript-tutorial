const userAge = document.getElementById("age");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
	console.log("button was clicked!");
	console.log(userAge.value);

	if (userAge.value <= 9) {
		result.innerHTML = "You're a Child";
	} else if (userAge.value > 9 && userAge.value <= 17) {
		result.innerHTML = "You're a Teenager";
	} else if (userAge.value >= 18) {
		result.innerHTML = "You're an Adult";
	
	} else {
		alert("Invalid Age");
	}

	userAge.value = "";
});
