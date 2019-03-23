import Component from './component.js';
import Cell from './cell.js';

import './deck.css';

/*
 * [Event name: params]
 * wrongClick: this
 * rightClick: this, pickedColor
 */
export default class Deck extends Component {
    static getRootClass() {
        return '.deck';
    }

    constructor(root) {
        super(root);

        this.gameOver = false;
        this.cards = [];
        const els = root.querySelectorAll(Card.getRootClass());
        for (let el of els) {
            const card = new Card(el);
            card.on('click', this.handleCardClick.bind(this));
            this.cards.push(card);
        }
        this.pickedColor = this.pickColor();
    }

    reset() {
        this.gameOver = false;
        for (let card of this.cards)
            card.reset();
        this.pickedColor = this.pickColor();
    }


}
