const body = document.body;


const title = document.createElement("h2");
title.textContent = "Marco! Polo! Results:";
body.appendChild(title);


const resultContainer = document.createElement("ul");
body.appendChild(resultContainer);

// Loops from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Creates a list item for each result
    const listItem = document.createElement("li");

    // Checking the conditions and set the text content
    if (i % 3 === 0 && i % 5 === 0) {
        listItem.textContent = "Marco! Polo!";
    } else if (i % 3 === 0) {
        listItem.textContent = "Marco!";
    } else if (i % 5 === 0) {
        listItem.textContent = "Polo!";
    } else {
        listItem.textContent = i;
    }

    // Adding the list item to the container
    resultContainer.appendChild(listItem);
}
