import { difficultyLevel } from "../index.js";
import { renderApp, renderCardsBack, renderCardsFront } from "./render";
import { getPlayPlace } from "./gets.js";

export const chooseDifficulty = () => {
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
			renderCardsBack();
			renderCardsFront();
			setTimeout(
				() =>
					alert(
						`Вы перешли на поле для игры, выбрав уровень сложности ${difficultyLevel.value}`
					),
				100
			);
		}
	});
};