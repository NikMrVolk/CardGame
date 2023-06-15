import { gameStatus } from '../index';
import { endGame } from './game';
import { getLossMenu } from './gets';

export const shuffle = (arr: Card[]): Card[] => {
	return arr
		.map<[number, Card]>((i) => [Math.random(), i])
		.sort()
		.map(([, i]) => i);
};

export const cardDoubling = (arr: Card[]) => {
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
