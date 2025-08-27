// ===============================
// Part 1: Variable Declarations & Conditionals
// ===============================
let age = 20;
let isStudent = true;

if (age >= 18 && isStudent) {
  console.log("You are an adult student.");
} else if (age >= 18) {
  console.log("You are an adult but not a student.");
} else {
  console.log("You are a minor.");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the project demo.`;
}
console.log(greetUser("John"));

// Function 2: Calculate sum
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 + 10 =", calculateSum(5, 10));

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: For loop (printing numbers 1–5)
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Value:", i);
}

// Loop 2: While loop (counting down from 5)
let count = 5;
while (count > 0) {
  console.log("While Loop Count:", count);
  count--;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// Interaction 1: Change text content on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = "The text has been changed!";
});

// Interaction 2: Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function () {
  document.body.classList.toggle("highlight");
});

// Interaction 3: Dynamically add list items
let listContainer = document.getElementById("listContainer");
for (let i = 1; i <= 3; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = "List item " + i;
  listContainer.appendChild(listItem);
}
