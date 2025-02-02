const body = document.body;

const title = document.createElement("h2");
title.textContent = "Odd or Even Results:";
body.appendChild(title);

const resultContainer = document.createElement("ul");
body.appendChild(resultContainer);

// Loop from 0 to 15
for (let i = 0; i <= 15; i++) {
    // Check if the number is odd or even and create a list item for each
    const listItem = document.createElement("li");
    if (i % 2 === 0) {
        listItem.textContent = `${i} is even`;
    } else {
        listItem.textContent = `${i} is odd`;
    }
    resultContainer.appendChild(listItem);
}
