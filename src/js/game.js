import { difficultyLevel } from '../index.js';
import { cards } from './cardsData.js';
import { shuffle, cardDoubling } from './helpers.js';

export const preparationForGame = () => {
	const shuffledСards = shuffle(cards);
	let cardsForGame;

	switch (difficultyLevel.value) {
		case '1':
			shuffledСards.splice(3);
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
