import global from './global';
import cell from './cell';

export default function grid () {
	cell();
	global.cell.addEventListener('click', () => {
		checkwin();
	});
}

function checkwin (){
	if(((global.cell11.innerHTML==="O")&&(global.cell21.innerHTML==="O")&&(global.cell31.innerHTML==="O"))||
	((global.cell12.innerHTML==="O")&&(global.cell22.innerHTML==="O")&&(global.cell32.innerHTML==="O"))||
	((global.cell13.innerHTML==="O")&&(global.cell23.innerHTML==="O")&&(global.cell33.innerHTML==="O"))||
	((global.cell11.innerHTML==="O")&&(global.cell12.innerHTML==="O")&&(global.cell13.innerHTML==="O"))||
	((global.cell21.innerHTML==="O")&&(global.cell22.innerHTML==="O")&&(global.cell23.innerHTML==="O"))||
	((global.cell31.innerHTML==="O")&&(global.cell32.innerHTML==="O")&&(global.cell33.innerHTML==="O"))||
	((global.cell11.innerHTML==="O")&&(global.cell22.innerHTML==="O")&&(global.cell33.innerHTML==="O"))||
	((global.cell13.innerHTML==="O")&&(global.cell22.innerHTML==="O")&&(global.cell31.innerHTML==="O"))){
	 if(!global.gameOver)global.cirscore++;
	 global.gameOver = true;
	 global.messageDisplay.innerHTML = "winner is circle!!";
	 global.cirscoredisplay.innerHTML = ":" + global.cirscore;
	 console.log(global.gameOver);
 }else if(((global.cell11.innerHTML==="X")&&(global.cell21.innerHTML==="X")&&(global.cell31.innerHTML==="X"))||
	((global.cell12.innerHTML==="X")&&(global.cell22.innerHTML==="X")&&(global.cell32.innerHTML==="X"))||
	((global.cell13.innerHTML==="X")&&(global.cell23.innerHTML==="X")&&(global.cell33.innerHTML==="X"))||
	((global.cell11.innerHTML==="X")&&(global.cell12.innerHTML==="X")&&(global.cell13.innerHTML==="X"))||
	((global.cell21.innerHTML==="X")&&(global.cell22.innerHTML==="X")&&(global.cell23.innerHTML==="X"))||
	((global.cell31.innerHTML==="X")&&(global.cell32.innerHTML==="X")&&(global.cell33.innerHTML==="X"))||
	((global.cell11.innerHTML==="X")&&(global.cell22.innerHTML==="X")&&(global.cell33.innerHTML==="X"))||
	((global.cell13.innerHTML==="X")&&(global.cell22.innerHTML==="X")&&(global.cell31.innerHTML==="X"))){
	 if(!global.gameOver)global.croscore++;
	 global.gameOver = true;
	 global.messageDisplay.innerHTML = "winner is cross!!";
	 if(!global.gameOver)global.croscore++;
	 global.croscoredisplay.innerHTML = ":" + global.croscore;
	 console.log(global.gameOver);
 }else if((global.cell11.innerHTML!=="_")&&(global.cell12.innerHTML!=="_")&&(global.cell13.innerHTML!=="_")&&
 	(global.cell21.innerHTML!=="_")&&(global.cell22.innerHTML!=="_")&&(global.cell23.innerHTML!=="_")&&
 	(global.cell31.innerHTML!=="_")&&(global.cell32.innerHTML!=="_")&&(global.cell33.innerHTML!=="_")){
		global.gameOver = true;
		global.messageDisplay.innerHTML = "draw!!";
		console.log(global.gameOver);
	}
}