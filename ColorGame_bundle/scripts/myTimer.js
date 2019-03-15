import color from './color';
import global from './global';
import stoptimer from './stopTimer';

function blink () {
	global.body.style.backgroundColor = '#232323';
	if (global.time === 0)
		global.body.style.backgroundColor = global.pickedColor;

}

export default function myTimer () {
	if (global.time > 0 && global.mode === 2) {
		setTimeout(blink, 80);
		global.body.style.backgroundColor = '#FFFFFF';
		global.time--;
	}
	console.log(global.time);
	global.timerDisplay.innerHTML = '&nbsp;&nbsp;' + global.time;
	if (global.time === 0) {
		stoptimer();
		global.messageDisplay.textContent = 'Timeout!';
		global.resetDisplay.textContent = 'Play Again';
		global.timerDisplay.innerHTML = '&nbsp;&nbsp;';
		color.changeColors('#FFF');
		global.body.style.backgroundColor = global.pickedColor;
		global.resetButton.style.display = 'block';
	}
}
