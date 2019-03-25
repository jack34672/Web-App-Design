import global from './global';

export default function cell () {
	global.cell11.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell11.innerHTML!="O")&&(global.cell11.innerHTML!="X")){
		if(global.turn===0){
			global.cell11.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell11.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
		}
	}
	});
	global.cell12.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell12.innerHTML!="O")&&(global.cell12.innerHTML!="X")){
		if(global.turn===0){
			global.cell12.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell12.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
		}
	}
	});
	global.cell13.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell13.innerHTML!="O")&&(global.cell13.innerHTML!="X")){
		if(global.turn===0){
			global.cell13.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell13.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
		}
	}
	});
	global.cell21.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell21.innerHTML!="O")&&(global.cell21.innerHTML!="X")){
		if(global.turn===0){
			global.cell21.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell21.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
		}
		}
	});
	global.cell22.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell22.innerHTML!="O")&&(global.cell22.innerHTML!="X")){
		if(global.turn===0){
			global.cell22.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell22.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
	}
	}
	});
	global.cell23.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell23.innerHTML!="O")&&(global.cell23.innerHTML!="X")){
		if(global.turn===0){
			global.cell23.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell23.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}
		}
		}
	});
	global.cell31.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell31.innerHTML!="O")&&(global.cell31.innerHTML!="X")){
		if(global.turn===0){
			global.cell31.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell31.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}}
	}
	});
	global.cell32.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell32.innerHTML!="O")&&(global.cell32.innerHTML!="X")){
		if(global.turn===0){
			global.cell32.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell32.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}}
	}
	});
	global.cell33.addEventListener('click', () => {
		if(!global.gameOver){
		if((global.cell33.innerHTML!="O")&&(global.cell33.innerHTML!="X")){
		if(global.turn===0){
			global.cell33.innerHTML="O";
			global.turn=1;
			console.log(global.turn);
		}else{
			global.cell33.innerHTML="X";
			global.turn=0;
			console.log(global.turn);
		}}
	}
	});
}

