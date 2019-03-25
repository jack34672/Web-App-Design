import global from './global';
import turn from './turn';

export default function role () {
	global.cirbut.addEventListener('click', () => {
		global.turn=0;
		turn();
		console.log(global.turn);
	});
	global.crobut.addEventListener('click', () => {
		global.turn=1;
		turn();
		console.log(global.turn);
	});
}