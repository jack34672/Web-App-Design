import Component from  './component.js';
import Role from './role.js';

import './board.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Board extends Component {
    static getRootClass() {
        return '.board';
    }

    constructor(root, color) {
        super(root);

        this.colorDisplay = root.querySelector('.color-picked');
        this.messageDisplay = root.querySelector('.message');
        this.reset(color);
    }

    reset(color) {
        this.colorDisplay.textContent = color;
        this.messageDisplay.textContent = "What's the Color?";
    }

    showColor(color) {
        this.colorDisplay.textContent = color;
    }

    showendMessage() {
        this.messageDisplay.textContent = "Game Set";
    }

    circleMessage() {
        this.messageDisplay.textContent = "turn of circle";
    }

    crossMessage() {
        this.messageDisplay.textContent = "turn of crosss";
    }
}
