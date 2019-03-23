import global from './global';
import turn from './turn';

export default function reset () {
	global.gameOver = false;
	global.turn=0;
	turn();
		global.cell11.innerHTML="_";
		global.cell13.innerHTML="_";
		global.cell21.innerHTML="_";
		global.cell22.innerHTML="_";
		global.cell23.innerHTML="_";
		global.cell31.innerHTML="_";
		global.cell12.innerHTML="_";
		global.cell32.innerHTML="_";
		global.cell33.innerHTML="_";
}
