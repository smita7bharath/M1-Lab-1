// to generate a random number between 0 and 1
let coinFlip = Math.random();
let result = coinFlip < 0.5 ? "Heads" : "Tails";

// we prompt the user to select either heads or tails
let choice = prompt("Heads or Tails?").trim();

if (result === "Heads" && choice === "Heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (result === "Heads" && choice === "Tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (result === "Tails" && choice === "Heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (result === "Tails" && choice === "Tails") {
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid input. Please type 'Heads' or 'Tails'.");
}
