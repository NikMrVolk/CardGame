import { difficultyLevel } from '../index.js';
import { cards } from './cardsData.js';
import { shuffle, cardDoubling } from './helpers.js';

export const preparationForGame = () => {
	const shuffledСards = shuffle(cards);
	let cardsForGame;

	switch (difficultyLevel.value) {
		case '1':
			shuffledСards.splice(4);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		case '2':
			shuffledСards.splice(6);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		case '3':
			shuffledСards.splice(9);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		default:
			throw new Error('Choosed another difficulty level');
	}
	return cardsForGame;
};

export const changeCardsSize = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsElements = document.querySelectorAll('.card__img');
	for (const cardElement of cardsElements) {
		switch (difficultyLevel.value) {
			case '1':
				gamePlace.style.width = '800px';
				cardElement.style.width = '150px';
				break;
			case '2':
				cardElement.style.width = '150px';
				break;
			case '3':
				cardElement.style.width = '150px';
				break;
			default:
				throw new Error('Choosed another difficulty level');
		}
	}
};
