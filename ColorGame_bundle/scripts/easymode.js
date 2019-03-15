import global from './global';
import navtoggle from './navtoggle';
import reset from './reset';
import stoptimer from './stopTimer';

export default function () {
	global.easymode.addEventListener('click', () => {
		global.mode = 0;
		global.numCards = 3;
		global.rows.style.display = 'none';
		global.resetButton.style.display = 'block';
		navtoggle();
		global.time = 5;
		stoptimer();
		global.timerDisplay.innerHTML = '&nbsp;&nbsp;';
		reset();
		console.log(global.mode);
	});

	global.easymode.addEventListener('mouseover', () => {
		if (global.mode === 0)
			global.ezbut.style.color = '#484848';
		else
			global.ezbut.style.color = 'rgb(86, 159, 255)';

	});

	global.easymode.addEventListener('mouseout', () => {
		if (global.mode === 0)
			global.ezbut.style.color = 'white';
		else
			global.ezbut.style.color = '#484848';

	});
}
