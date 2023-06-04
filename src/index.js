import './css/style.css';
import { getdifficultyLevel, getPlayPlace } from './js/gets.js';
import { renderApp, renderCardsBack, renderCardsFront } from './js/render.js';

export const app = document.querySelector('.content');

// let gameTime
let difficultyLevel;
// let gameStatus
// let generatedCards
// let choosedCards

// Todo: Разделить разметку игрового меню и поля для игры в gets (+)
// Todo: Создать массив данных на основании цвета и масти карт (+)
// Todo: Воссоздать рендер поля игры с цветами карт на основании массива (+)
// Todo: Сделать один массив с картами
// Todo: Создать модуль под начало игры при выборе уровня сложности
// Todo: Реализовать дальнейший пользовательский сценарий:
// Todo: Воссоздать генерацию карт исходя из выбранного уровня сложности
// Todo: Показать пользователю карты на 5 секунд, после чего показать обложки
// Todo: Проработать процесс сравнения карт:
// Todo: При выборе карты показывать её
// Todo: При выборе другой карты показать вторую и сравнить их

export const startGame = () => {
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
			renderCardsBack();
			renderCardsFront();
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

renderApp(getdifficultyLevel);
