import { difficultyLevel, gameStatus } from '../index';
import { renderApp, renderCardsFront } from './render';
import { game } from './game';

export const chooseDifficulty = () => {
	gameStatus.status = 'choose difficulty';
	const buttonChooseDifficulty: any = document.querySelector(
		'.choose-difficulty__start-button'
	);
	buttonChooseDifficulty.addEventListener('click', () => {
		const inputsDifficultyLevel: any = document.querySelectorAll(
			'.choose-difficulty__real-radio'
		);
		for (const inputDifficultyLevel of inputsDifficultyLevel) {
			if (inputDifficultyLevel.checked) {
				difficultyLevel.value = inputDifficultyLevel.value;
			}
		}
		if (difficultyLevel) {
			game();
		}
	});
};
