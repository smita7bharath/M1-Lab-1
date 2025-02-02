
const body = document.body;


const title = document.createElement("h2");
title.textContent = "Coin Flip Streak Game Results:";
body.appendChild(title);

const resultList = document.createElement("ul");
body.appendChild(resultList);


let coinFlip;
let streak = 0;

do {
    // Generate a random number and round it to either 0 or 1
    coinFlip = Math.round(Math.random());

    // Creates a list item for each result
    const listItem = document.createElement("li");
    if (coinFlip === 0) {
        listItem.textContent = "Heads";
        streak++; // Increment the streak for "Heads"
    } else {
        listItem.textContent = "Tails";
    }
    resultList.appendChild(listItem);
} while (coinFlip === 0);

// Displays the streak result at the end
const streakResult = document.createElement("p");
streakResult.textContent = `You got a streak of ${streak} Heads before Tails.`;
body.appendChild(streakResult);
