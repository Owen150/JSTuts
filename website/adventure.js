const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play? (y/n): ");

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right? (left/right):");
} else {
    console.log("That's too bad!");
}