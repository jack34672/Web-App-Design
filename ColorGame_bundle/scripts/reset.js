import color from './color';
import global from './global';

export default function reset () {
	global.gameOver = false;
	global.colors = color.generateRandomColors(global.numCards);
	// pick a new random color from array
	global.pickedColor = color.pickColor();
	// change colorDisplay to match picked Color
	global.colorDisplay.textContent = global.pickedColor;
	global.resetDisplay.textContent = 'New Color';
	global.messageDisplay.textContent = "What's the Color?";
	// change colors of cards
	for (let i = 0; i < global.cards.length; i++) {
		global.cards[i].style.opacity = 1;
		if (global.colors[i]) {
			global.cards[i].style.display = 'block';
			global.cards[i].style.backgroundColor = global.colors[i];
		} else
			global.cards[i].style.display = 'none';

	}
	global.body.style.backgroundColor = '#232323';
}
