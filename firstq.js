let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

// we compare the two numbers and display the result
if (num1 > num2) {
    alert(`The larger number is ${num1}`);
} else if (num1 < num2) {
    alert(`The larger number is ${num2}`);
} else {
    alert("The two numbers are equal.");
}
