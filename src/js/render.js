import { app } from '../index.js';
import { cards } from './cardsData.js';
import { chooseDifficulty } from './chooseDificulty.js';
import { getCardsBack, getCardsFront } from './gets.js';

export const renderApp = (getElementHTML) => {
	app.innerHTML = getElementHTML();
	if (document.querySelector('.choose-difficulty__start-button')) {
		chooseDifficulty();
	}
};

export const renderCardsBack = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsBackHTML = cards.map((card) => getCardsBack(card)).join('');
	gamePlace.innerHTML = cardsBackHTML;
};

export const renderCardsFront = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsFrontHTML = cards.map((card) => getCardsFront(card)).join('');
	gamePlace.innerHTML = cardsFrontHTML;
};
