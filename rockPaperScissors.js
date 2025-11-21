//Here we are creating a game called rock paper scissors:

const prompt = require("prompt-sync")();

let comp_win = 0;
let player_win = 0;
console.log("Welcome to the game: ");

while(true) {
  // const play = prompt("Please enter rock, paper or scissors or q to quit the game! ");
  // if(play.toLowerCase() === "q"){
  //     break;
  // }

  //check for the valid input
  const input = prompt(
    "Please choose between rock, paper and scissors or q to quit the game ").toLowerCase();
  if (input === "q") {
    break;
  }
  if (
    input !== "rock" &&
    input !== "paper" &&
    input !== "scissors"
  ) {
    console.log("Please enter a valied Input: ");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  //we use random to select the index to fetch the value from the above list
  const randomIndex = Math.floor(Math.random() * 3); //generating number between (0,1,2);

  const computer_choice = choices[randomIndex];

  console.log("Computer choice is: ", computer_choice);

  if (computer_choice === input) {
    console.log("It's a tie!");
  } else if (
    (input == "paper" && computer_choice == "rock") ||
    (input == "rock" && computer_choice == "scissors") ||
    (input == "scissors" && computer_choice == "paper")
  ) {
    console.log("You Won!");
    player_win++;
  } else {
    console.log("Computer wins!");
    comp_win++;
  }
}

console.log("Your point is ", player_win, " and computer point is ", comp_win);
if (player_win > comp_win) {
  console.log("You won the game by ", player_win - comp_win, " points");
} else if (player_win === comp_win) {
  console.log("It's a tie!");
} else {
  console.log("The computer won by ", comp_win - player_win, " points");
}
