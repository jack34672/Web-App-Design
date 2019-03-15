import global from './global';
import myTimer from './myTimer';
import navtoggle from './navtoggle';
import reset from './reset';
import stoptimer from './stopTimer';


export default function () {
	global.nightmaremode.addEventListener('click', () => {
		global.mode = 2;
		global.numCards = 6;
		stoptimer();
		global.rows.style.display = 'inline';
		global.time = 5;
		navtoggle();
		global.resetButton.style.display = 'none';
		global.timerDisplay.innerHTML = '&nbsp;&nbsp;' + global.time;
		if (global.mode === 2)
			global.mytimer = setInterval(myTimer, 1000);

		reset();
		console.log(global.mode);
	});

	global.nightmaremode.addEventListener('mouseover', () => {
		if (global.mode === 2)
			global.nmbut.style.color = '#484848';
		else
			global.nmbut.style.color = 'rgb(86, 159, 255)';

	});

	global.nightmaremode.addEventListener('mouseout', () => {
		if (global.mode === 2)
			global.nmbut.style.color = 'white';
		else
			global.nmbut.style.color = '#484848';

	});
}
