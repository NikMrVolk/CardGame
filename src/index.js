import './css/style.css';
import { getdifficultyLevel } from './js/gets.js';
import { renderApp } from './js/render.js';

export const app = document.querySelector('.content');

export let gameTime = {};
export let difficultyLevel = {};
export let gameStatus = {};
export let generatedCards = {};
export let choosedCards = {};

// Todo: Разделить разметку игрового меню и поля для игры в gets (+)
// Todo: Создать массив данных на основании цвета и масти карт (+)
// Todo: Воссоздать рендер поля игры с цветами карт на основании массива (+)
// Todo: Сделать один массив с картами (+)
// Todo: Создать модуль под начало игры при выборе уровня сложности (+)
// Todo: Реализовать дальнейший пользовательский сценарий:
// Todo: Воссоздать генерацию карт исходя из выбранного уровня сложности (+)
// Todo: Откорректировать размеры карт исходя из их количества (+)
// Todo: Показать пользователю карты на 5 секунд, после чего показать обложки (+)
// Todo: Проработать процесс сравнения карт:
// Todo: При выборе карты показывать её
// Todo: При выборе другой карты показать вторую и сравнить их

renderApp(getdifficultyLevel);
