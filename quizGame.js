const prompt = require("prompt-sync")();
//This will be a quiz game

console.log("Welcome to the Quiz Game!");
let correctAns = 0;
let total = 3;

//Question 1:
const ans1 = prompt("What is the brain of the computer ? ");

const correctAnswer1 = "cpu";

if (ans1.toLowerCase() === correctAnswer1) {
  correctAns += 1;
  console.log("Yes Your Answer is Correct!");
} else {
  console.log("Your Answer is wrong!");
}

//Question 2:
const ans2 = prompt("When the power is turned off, data in RAM is ? ");

const correctAnswer2 = "lost";

if (ans2.toLowerCase() === correctAnswer2) {
  correctAns += 1;
  console.log("Yes your Answer is Correct!");
} else {
  console.log("Your Answer is wrong!");
}

//Question 3:
const ans3 = prompt("RAM speed is measured using ? ");
const correctAnswer3 = "mhz";

if (ans3.toLowerCase() === correctAnswer3) {
  correctAns += 1;
  console.log("Yes your Answer is Correct!");
} else {
  console.log("Your Answer is wrong!");
}

console.log("You have got", correctAns.toString(), "Correct Answer");
const percentage = Math.round((correctAns / total) * 100);
console.log("Your Score", percentage.toString(), "%");
