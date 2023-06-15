import './css/style.css';
import { getdifficultyLevel } from './js/gets';
import { renderApp } from './js/render';

export const app: any = document.querySelector('.content');

export let gameTime: GameTime = {
	seconds: 0,
	minutes: 0,
};
export let difficultyLevel: DifficultyLevel = {};
export let gameStatus: GameStatus = {
	status: '',
};
export let generatedCards: GeneratedCards = {};
export let choosedCards: string[] = [];

renderApp(getdifficultyLevel);
