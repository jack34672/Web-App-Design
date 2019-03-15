import global from './global';

export default {
	pickColor: function pickColor () {
		const random = Math.floor(Math.random() * global.colors.length);
		return global.colors[random];
	},

	generateRandomColors: function generateRandomColors (num) {
		// make an array
		const arr = [];
		// repeat num times
		for (let i = 0; i < num; i++)
		// get random color and push into arr
			arr.push(this.randomColor());

		// return that array
		return arr;
	},

	randomColor: function randomColor () {
		// pick a "red" from 0 - 255
		const r = Math.floor(Math.random() * 256);
		// pick a "green" from  0 -255
		const g = Math.floor(Math.random() * 256);
		// pick a "blue" from  0 -255
		const b = Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	},

};
