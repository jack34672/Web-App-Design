class global {
	constructor () {
		this.numCards = 3;
		this.gameOver = false;
		this.colors = [];
		this.pickedColor;
		this.body = document.querySelector('body');
		this.cards = document.querySelectorAll('.card');
		this.colorDisplay = document.getElementById('color-picked');
		this.messageDisplay = document.querySelector('#message');
		this.timerDisplay = document.querySelector('#timer');
		this.h1 = document.querySelector('h1');
		this.resetButton = document.querySelector('#reset');
		this.resetDisplay = document.querySelector('#reset span');
		this.mode = 0;
		this.cardcontainer = document.querySelector('#card-container');
		this.easymode = document.querySelector('.easy');
		this.hardmode = document.querySelector('.hard');
		this.nightmaremode = document.querySelector('.nightmare');
		this.rows = document.getElementById('addrow');
		this.time = 5;
		this.mytimer;
		this.ezbut = document.getElementById('ezbut');
		this.hdbut = document.getElementById('hdbut');
		this.nmbut = document.getElementById('nmbut');
	}
}

export default new global;
