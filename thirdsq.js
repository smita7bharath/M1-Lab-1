
let coinFlip;

// Looping  10 times to simulate 10 coin flips
for (let i = 0; i < 10; i++) {
    // Generating a random number and round it to either 0 or 1
    coinFlip = Math.round(Math.random());

    // Check the result and mark it either "Heads" or "Tails"
    if (coinFlip === 0) {
        console.log("Heads");
        alert("Heads");
    } else {
        console.log("Tails");
        alert("Tails");
    }
}
