// Save the reference to text-field
const textField = document.querySelector("#itemInput");

// Save the reference to new-item button
const addButton = document.querySelector("#addBtn");

// Save the reference to unordered list
const itemList = document.querySelector("#itemList");

// Save the reference to paragraph for feedback
const feedback = document.querySelector(".feedback");


// Start function addItem
function addItem(){

// Create list-item
let listItem = document.createElement("li");

// Check if user entered value
if(textField.value !== ""){

// Assign text to list item
listItem.textContent = textField.value;

// Append list item to list
itemList.appendChild(listItem);

// Clear feedback
feedback.textContent = "";

// Clear text field
textField.value = "";

// Put cursor back
textField.focus();

}
else{

// Print error message
feedback.textContent = "Nothing entered!";

}

}
// End function


// Register function for button click
addButton.addEventListener("click", addItem);