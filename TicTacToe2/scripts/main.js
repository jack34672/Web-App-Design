import global from './global';
import reset from './reset';
import banner from './banner';
import grid from './grid';

window.onload = function () {
	init();
};

function init () {
	reset();
	banner();
	grid();
	console.log(global.turn);
}

global.resetButton.addEventListener('click', () => {
	reset();
});
