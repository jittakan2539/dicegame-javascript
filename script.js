//Compare dice

let leftNumber = Math.floor(Math.random() * 6 + 1);
let rightNumber = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
document.querySelector(".img2").setAttribute("src", "./images/dice6.png");

//ข้อความข้างบน
if (leftNumber > rightNumber) {
	document.querySelector("h1").textContent = "Player 1 Wins";
} else if (leftNumber < rightNumber) {
	document.querySelector("h1").textContent = "Player 2 Wins";
} else {
	document.querySelector("h1").textContent = "Draw!";
}
function reload() {
	window.reload(method);
}

document.querySelector("button").addEventListener("click", () => {
	location.reload();
});

//แสดงหน้าลูกเต๋า 1
switch (leftNumber) {
	case 1:
		document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
		break;
	case 2:
		document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
		break;
	case 3:
		document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
		break;
	case 4:
		document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
		break;
	case 5:
		document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
		break;
	default:
		document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

//แสดงหน้าลูกเต๋า 2
switch (rightNumber) {
	case 1:
		document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
		break;
	case 2:
		document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
		break;
	case 3:
		document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
		break;
	case 4:
		document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
		break;
	case 5:
		document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
		break;
	default:
		document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

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
