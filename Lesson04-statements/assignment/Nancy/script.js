// 0 - 30 = F9
// 30 - 40 = E8
// 40 - 50 = D7
// 50 - 60 = C6
// 60 - 70 = B3
// 70 - 74 = B2
// 75 - 100 = A1

const score = document.getElementById("score");
const button = document.querySelector("button");
const grade = document.getElementById("grade");

button.addEventListener("click", () => {
   if(score.value <= 30) {
    grade.innerHTML = "F9"
   } else if (score.value <= 40) {
    grade.innerHTML = "E8"
   } else if (score.value <= 50) {
    grade.innerHTML = "D7"
   } else if (score.value <= 60 ){
    grade.innerHTML = "C6"
   } else if (score.value <= 70){
    grade.innerHTML = "B3"
   } else if (score.value > 70 && score.value <= 74) {
    grade.innerHTML = "B2"
   }  else if (score.value >= 75 && score.value <= 100) {
    grade.innerHTML = "A1"
   }

   score.value = "";
});