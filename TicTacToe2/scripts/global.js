class global {
	constructor () {
		this.turn=0;
		this.gameOver = false;
		this.body = document.querySelector('body');
		this.cell = document.querySelectorAll('.cell');
		this.messageDisplay = document.querySelector('#message');
		this.board = document.querySelector('.board');
		this.resetButton = document.querySelector('#reset');
		this.resetDisplay = document.querySelector('#reset span');
		this.container = document.querySelector('.container');
		this.cirbut = document.querySelector('.circle');
		this.crobut = document.querySelector('.cross');
		this.cell11 = document.querySelector('.cell11');
		this.cell12 = document.querySelector('.cell12');
		this.cell13 = document.querySelector('.cell13');
		this.cell21 = document.querySelector('.cell21');
		this.cell22 = document.querySelector('.cell22');
		this.cell23 = document.querySelector('.cell23');
		this.cell31 = document.querySelector('.cell31');
		this.cell32 = document.querySelector('.cell32');
		this.cell33 = document.querySelector('.cell33');
		this.cell=document.querySelector('.cell');
		this.cirscoredisplay = document.querySelector('.circlescore');
		this.croscoredisplay = document.querySelector('.crossscore');
		this.cirscore = 0;
		this.croscore = 0;
	}
}

export default new global;
