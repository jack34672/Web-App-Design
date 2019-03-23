import global from './global';
import Component from './component';

export default function turn () {
	if (global.turn === 0) {
		global.messageDisplay.innerHTML = "turn of circle";
	}else{
		global.messageDisplay.innerHTML = "turn of cross";
	}
}
