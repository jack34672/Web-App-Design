import global from './global';

export default function stoptimer () {
	clearInterval(global.mytimer);
}
