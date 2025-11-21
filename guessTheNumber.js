//Guess the number game:

const prompt = require("prompt-sync")(); //to load and call the fuction to fetch the bucket


let noGuess = 0;

//we need the random number
let randomNo = Math.floor(Math.random()*10);

console.log("Let's start the game!");


while(true){

    let input = Number(prompt("Guess your number between (0,10)? "));


    if(randomNo > input){
        noGuess++;
        console.log("The Number lies above your guess: ", input, "\n Try again! ");
        
    }
    if(randomNo < input){
        noGuess++;
        console.log("The Number lies below your guess: ", input, "\n Try again! ");
        
    }
    if(randomNo === input){
        noGuess++;
        console.log("Yes you guessed the number at ", noGuess,"th guess. Congradulation!");
        break
    }
}