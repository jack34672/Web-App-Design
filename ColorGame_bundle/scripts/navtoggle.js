import global from './global';

export default function navtoggle () {
	if (global.mode === 0) {
		global.ezbut.style.backgroundColor = 'rgb(86, 159, 255)';
		global.ezbut.style.color = 'white';
		global.hdbut.style.backgroundColor = 'white';
		global.hdbut.style.color = '#484848';
		global.nmbut.style.backgroundColor = 'white';
		global.nmbut.style.color = '#484848';
	} else if (global.mode === 1) {
		global.hdbut.style.backgroundColor = 'rgb(86, 159, 255)';
		global.hdbut.style.color = 'white';
		global.ezbut.style.backgroundColor = 'white';
		global.ezbut.style.color = '#484848';
		global.nmbut.style.backgroundColor = 'white';
		global.nmbut.style.color = '#484848';
	} else {
		global.ezbut.style.backgroundColor = 'white';
		global.ezbut.style.color = '#484848';
		global.hdbut.style.backgroundColor = 'white';
		global.hdbut.style.color = '#484848';
		global.nmbut.style.backgroundColor = 'rgb(86, 159, 255)';
		global.nmbut.style.color = 'white';
	}
}
