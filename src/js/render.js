import { app } from '../index.js';
import { cardsBack, cardsFront } from './cardsData.js';
import { startGame } from '../index.js';
import { getCardsBack, getCardsFront } from './gets.js';

export const renderApp = (getElementHTML) => {
	app.innerHTML = getElementHTML();
	if (document.querySelector('.choose-difficulty__start-button')) {
		startGame();
	}
};

export const renderCardsBack = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsBackHTML = cardsBack.map((card) => getCardsBack(card)).join('');
	gamePlace.innerHTML = cardsBackHTML;
};

export const renderCardsFront = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsFrontHTML = cardsFront.map((card) => getCardsFront(card)).join('');
	gamePlace.innerHTML = cardsFrontHTML;
};
