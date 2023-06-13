import { app } from '../index';
import { chooseDifficulty } from './chooseDificulty';
import { getCardsBack, getCardsFront } from './gets';


export const renderApp = (getElementHTML: Function) => {
	app.innerHTML = getElementHTML();
	if (document.querySelector('.choose-difficulty__start-button')) {
		chooseDifficulty();
	}
};

export const renderCardsBack = (cards: Card[]) => {
	const gamePlace: HTMLElement | null = document.getElementById('game-place');
	const cardsBackHTML = cards.map((card) => getCardsBack(card)).join('');
	if (gamePlace) {
		gamePlace.innerHTML = cardsBackHTML;
	}
};

export const renderCardsFront = (cards: Card[]) => {
	const gamePlace: HTMLElement | null = document.getElementById('game-place');
	const cardsFrontHTML = cards.map((card) => getCardsFront(card)).join('');
	if (gamePlace) {
		gamePlace.innerHTML = cardsFrontHTML;
	}
};
