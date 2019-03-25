import global from './global';

export default function turn () {
	if (global.turn === 0) {
		global.messageDisplay.innerHTML = "turn of circle";
	}else{
		global.messageDisplay.innerHTML = "turn of cross";
	}
	global.cell.addEventListener('click', () => {
		if (global.turn === 0) {
			global.messageDisplay.innerHTML = "turn of circle";
		}else{
			global.messageDisplay.innerHTML = "turn of cross";
		}
	});
}
