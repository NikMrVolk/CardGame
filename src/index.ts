import './css/style.css';
import { getdifficultyLevel } from './js/gets';
import { renderApp } from './js/render';

export const app: any = document.querySelector('.content');

export let gameTime = {};
export let difficultyLevel: DifficultyLevel = {};
export let gameStatus: GameStatus = {};
export let generatedCards: GeneratedCards = {};
export let choosedCards: string[] = [];

renderApp(getdifficultyLevel);
