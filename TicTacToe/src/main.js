import Component from  './component.js';
import Navbar from  './navbar.js';
import Board from  './board.js';
import Deck from  './deck.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.navbar = new Navbar(root.querySelector('.navbar'));

        this.deck = new Deck(root.querySelector('.deck'));
        this.deck.on('CircleClick', this.handleDeckCircleClick.bind(this));
        this.deck.on('CrossClick', this.handleDeckCrossClick.bind(this));
        this.deck.on('endClick', this.handleDeckendClick.bind(this));

        this.board = new Board(root.querySelector('.board'), this.deck.getPickedColor());

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleRestClick.bind(this));
    }

    handleDeckCircleClick(firer) {
        this.board.circleMessage();
    }

    handleDeckCrossClick(firer) {
        this.board.crossMessage();
    }

    handleDeckendClick(firer) {
        this.board.showendMessage();
        this.reset.showPlayAgain();
    }

    handleRestClick() {
        this.root.style.backgroundColor = "#232323";

        this.deck.reset();
        this.board.reset(this.deck.getPickedColor());
        this.reset.reset();
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
