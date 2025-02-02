const body = document.body;


const heading = document.createElement("h2");
heading.textContent = "Looping a Triangle:";
body.appendChild(heading);


const triangleContainer = document.createElement("pre");
body.appendChild(triangleContainer);

let triangle = "";

// Looping to build the triangle
for (let i = 1; i <= 7; i++) {
    triangle += "#"; // Adding one "#" for each iteration
    triangleContainer.textContent += triangle + "\n"; // Adding each line to the container
}
