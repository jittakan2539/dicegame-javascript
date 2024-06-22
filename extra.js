//วิธีเขียนให้สั้นกว่า
// Generate random numbers for both dice
let leftNumber = Math.floor(Math.random() * 6 + 1);
let rightNumber = Math.floor(Math.random() * 6 + 1);

// Update the header text based on the comparison of dice values
if (leftNumber > rightNumber) {
	document.querySelector("h1").textContent = "Player 1 Wins";
} else if (leftNumber < rightNumber) {
	document.querySelector("h1").textContent = "Player 2 Wins";
} else {
	document.querySelector("h1").textContent = "Draw!";
}

// Reload page function
function reload() {
	location.reload();
}

// Add event listener to button for reloading the page
document.querySelector("button").addEventListener("click", reload);

// Function to set the dice image based on the number
function setDiceImage(diceNumber, imgSelector) {
	document
		.querySelector(imgSelector)
		.setAttribute("src", `./images/dice${diceNumber}.png`);
}

// Set the image for left dice
setDiceImage(leftNumber, ".img1");

// Set the image for right dice
setDiceImage(rightNumber, ".img2");
