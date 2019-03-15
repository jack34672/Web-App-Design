import easymode from './easymode';
import global from './global';
import hardmode from './hardmode';
import myTimer from './myTimer';
import navtoggle from './navtoggle';
import nightmaremode from './nightmaremode';
import reset from './reset';
import stoptimer from './stopTimer';

window.onload = function () {
	navtoggle();
	init();
	easymode();
	hardmode();
	nightmaremode();
};

function init () {
	initCards();
	reset();
	console.log(global.mode);
}

function initCards () {
	for (let i = 0; i < global.cards.length; i++)
		// add click listeners to cards
		global.cards[i].addEventListener('click', cardClickedHandler);
}

function cardClickedHandler (e) {
	if (global.gameOver)
		return;
	// grab color of clicked card
	const clickedColor = e.currentTarget.style.backgroundColor;
	// alert(this.style.backgroundColor);
	// compare color to pickedColor
	if (global.time > 0)
		if (clickedColor === global.pickedColor) {
			stoptimer();
			global.messageDisplay.textContent = 'Correct!';
			global.resetDisplay.textContent = 'Play Again';
			changeColors('#FFF');
			global.body.style.backgroundColor = clickedColor;
			global.gameOver = true;
			global.resetButton.style.display = 'block';
		} else {
			e.currentTarget.style.opacity = 0;
			global.messageDisplay.textContent = 'Try Again';
		}
}

global.resetButton.addEventListener('click', () => {
	stoptimer();
	reset();
	if (global.mode === 2) {
		global.time = 5;
		global.timerDisplay.innerHTML = '&nbsp;&nbsp;' + global.time;
		global.mytimer = setInterval(myTimer, 1000);
		global.resetButton.style.display = 'none';
	}
});


function changeColors (color) {
	// loop through all cards
	for (let i = 0; i < global.cards.length; i++) {
		// change each color to match given color
		global.cards[i].style.opacity = 1;
		global.cards[i].style.backgroundColor = color;
	}
}
