import { difficultyLevel, gameStatus } from '../index';
import { game } from './game';

export const chooseDifficulty = () => {
	gameStatus.status = 'choose difficulty';
	const buttonChooseDifficulty: HTMLElement | null = document.querySelector(
		'.choose-difficulty__start-button'
	);
	buttonChooseDifficulty?.addEventListener('click', () => {
		const inputsDifficultyLevel: NodeListOf<HTMLInputElement> = document.querySelectorAll(
			'.choose-difficulty__real-radio'
		);
		inputsDifficultyLevel.forEach((inputDifficultyLevel) => {
			if (inputDifficultyLevel.checked) {
				difficultyLevel.value = inputDifficultyLevel.value;
			}
		})
		if (difficultyLevel) {
			game();
		}
	});
};
