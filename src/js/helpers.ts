import { gameStatus } from '../index';
import { endGame } from './game';
import { getLossMenu } from './gets';

export const shuffle = (arr: Array<object>) => {
	return arr
		.map((i) => [Math.random(), i])
		.sort()
		.map((i) => i[1]);
};

export const cardDoubling = (arr: Array<object>) => {
	return arr.map((el) => [el].concat([el])).flat();
};

export const cardsComparison = (
	choosedCards: string[],
	firstElement: number,
	secondElement: number
) => {
	if (choosedCards[firstElement] !== choosedCards[secondElement]) {
		gameStatus.status = 'Вы проиграли!';
		endGame(getLossMenu);
	}
};
