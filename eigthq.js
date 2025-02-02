// Prompts the user to enter a starting number for the countdown
let startNumber = parseInt(prompt("Enter a number to start the countdown from:"));

const body = document.body;


const title = document.createElement("h2");
title.textContent = "Countdown Results:";
body.appendChild(title);

const resultContainer = document.createElement("ul");
body.appendChild(resultContainer);

// Validates the input and perform the countdown
if (!isNaN(startNumber)) {
    for (let i = startNumber; i >= 0; i--) {
    
        const listItem = document.createElement("li");
        listItem.textContent = i;
        resultContainer.appendChild(listItem);
    }
} else {
    // Displays an error message if the input is invalid
    const error = document.createElement("p");
    error.textContent = "Invalid input. Please refresh and enter a valid number.";
    body.appendChild(error);
}
