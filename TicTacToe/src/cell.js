import Component from  './component.js';

import './cell.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    constructor(root) {
        super(root);

        root.addEventListener("click", this.handleDomClick.bind(this));
        this.reset();
    }

    reset() {
        this.fadeIn(this.color);
    }

    getColor() {
        return this.color;
    }

    fadeOut() {
        this.root.style.opacity = 0;
    }

    fadeIn(color) {
        this.root.style.backgroundColor = color;
        this.root.style.opacity = 1;
    }

    handleDomClick(e) {
        this.fire('click', this.color);
    }
}
