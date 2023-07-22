const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

const playerChoice = prompt("Enter rock, paper or scissors: ");
if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    console.log("Please enter a valid player choice.");
}

const choices = ["rock", "paper", "scissors"];
//Generates a random number between 0 and 2
const choiceIndex = Math.round(Math.random() * 2);
const computerChoice = choices[choiceIndex];
console.log(computerChoice);

if (playerChoice === computerChoice) {
    console.log("Draw!");
    ties++;
} else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You Won!");
    wins++;
}