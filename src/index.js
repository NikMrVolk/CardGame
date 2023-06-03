import './css/style.css';

import { getdifficultyLevel } from "./js/gets.js";
import { getPlayPlace } from './js/gets.js';

const app = document.querySelector('.content');

// let gameTime
let difficultyLevel;
// let gameStatus
// let generatedCards
// let choosedCards

// Todo: Разделить разметку игрового меню и поля для игры в gets
// Todo: Создать массив данных на основании цвета и масти карт
// Todo: Воссоздать рендер поля игры с цветами карт на основании массива
// Todo: Реализовать дальнейший пользовательский сценарий

const startGame = () => {
	const buttonStartGame = document.querySelector(
		'.choose-difficulty__start-button'
	);
	buttonStartGame.addEventListener('click', () => {
		const inputsDifficultyLevel = document.querySelectorAll(
			'.choose-difficulty__real-radio'
		);
		for (const inputDifficultyLevel of inputsDifficultyLevel) {
			if (inputDifficultyLevel.checked) {
				difficultyLevel = inputDifficultyLevel.value;
			}
		}
		if (difficultyLevel) {
			renderApp(getPlayPlace);
			setTimeout(
				() =>
					alert(
						`Вы перешли на поле для игры, выбрав уровень сложности ${difficultyLevel}`
					),
				100
			);
		}
	});
};

const renderApp = (getElementHTML) => {
	app.innerHTML = getElementHTML();
	if (document.querySelector('.choose-difficulty__start-button')) {
		startGame();
	}
};

renderApp(getdifficultyLevel);
