import global from './global';
import navtoggle from './navtoggle';
import reset from './reset';
import stoptimer from './stopTimer';

export default function () {
	global.hardmode.addEventListener('click', () => {
		global.mode = 1;
		global.numCards = 6;
		global.rows.style.display = 'inline';
		global.resetButton.style.display = 'block';
		global.time = 5;
		navtoggle();
		stoptimer();
		global.timerDisplay.innerHTML = '&nbsp;&nbsp;';
		reset();
		console.log(global.mode);
	});

	global.hardmode.addEventListener('mouseover', () => {
		if (global.mode === 1)
			global.hdbut.style.color = '#484848';
		else
			global.hdbut.style.color = 'rgb(86, 159, 255)';

	});

	global.hardmode.addEventListener('mouseout', () => {
		if (global.mode === 1)
			global.hdbut.style.color = 'white';
		else
			global.hdbut.style.color = '#484848';

	});
}
