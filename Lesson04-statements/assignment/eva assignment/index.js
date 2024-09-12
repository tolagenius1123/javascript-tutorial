const studentScore = document.getElementById("grade");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  console.log("button was clicked!");
  console.log(studentScore.value);

  if (studentScore.value >= 0 && studentScore.value <= 30) {
    result.innerHTML = "F9";
} else if (studentScore.value >= 30 && studentScore.value <= 40) {
  result.innerHTML = "E8";
} else if (studentScore.value >=40 && studentScore.value <= 50) {
  result.innerHTML = "D7";
} else if (studentScore.value >= 50 && studentScore.value <= 60) {
  result.innerHTML = "C6";
} else if (studentScore.value >= 60 && studentScore.value <= 70) {
  result.innerHTML = "B3";
} else if (studentScore.value >= 70 && studentScore.value <= 74) {
  result.innerHTML = "B2";
} else if (studentScore.value >= 75 && studentScore.value <= 100) {
  result.innerHTML = "A1";
} else {
  alert("Invalid Score");
}

  studentScore.value = "";
});
