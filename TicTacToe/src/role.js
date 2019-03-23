import Component from  './component.js';

import './role.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Role extends Component {
    static getRootClass() {
        return '.role';
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


}
