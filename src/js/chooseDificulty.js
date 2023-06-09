import { difficultyLevel, gameStatus } from '../index.js';
import { renderApp, renderCardsFront } from './render';
import { getPlayPlace } from './gets.js';
import {
	preparationForGame,
	changeCardsSize,
	hidingCards,
	showingAndCompareCards,
} from './game.js';

export const chooseDifficulty = () => {
	gameStatus.value = 'choose difficulty';
	const buttonChooseDifficulty = document.querySelector(
		'.choose-difficulty__start-button'
	);
	buttonChooseDifficulty.addEventListener('click', () => {
		const inputsDifficultyLevel = document.querySelectorAll(
			'.choose-difficulty__real-radio'
		);
		for (const inputDifficultyLevel of inputsDifficultyLevel) {
			if (inputDifficultyLevel.checked) {
				difficultyLevel.value = inputDifficultyLevel.value;
			}
		}
		if (difficultyLevel) {
			renderApp(getPlayPlace);
			renderCardsFront(preparationForGame());
			changeCardsSize();

			setTimeout(() => {
				hidingCards();
				showingAndCompareCards();
			}, 5000);
		}
	});
};
