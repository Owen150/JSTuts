const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play? (y/n): ");

if (answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right? (left/right):");

    if (answer2 === "left") {
        comsole.log("Oops, You fell off a cliff. You lost!");
    } else {
        console.log("Nice. You go right and approach a bridge....");
        const answer3 = prompt("Would you look to cross the brdge or turn and find another way? (cross/turn): ");
        if (answer3 === "cross") {
            console.log("You cross the bridge and reach the end of the game!");
        } else {
            console.log("You turn back and trip on a log. You lose.");
        }
    }

} else {
    console.log("That's too bad!");
}