import { difficultyLevel } from '../index.js';
import { cards } from './cardsData.js';
import { shuffle, cardDoubling } from './helpers.js';
import { renderCardsBack } from './render.js';

export const preparationForGame = () => {
	const shuffledСards = shuffle(cards);
	let cardsForGame;

	switch (difficultyLevel.value) {
		case '1':
			shuffledСards.splice(4);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		case '2':
			shuffledСards.splice(6);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		case '3':
			shuffledСards.splice(9);
			cardsForGame = cardDoubling(shuffledСards);
			cardsForGame = shuffle(cardsForGame);
			break;
		default:
			throw new Error('Choosed another difficulty level');
	}
	return cardsForGame;
};

export const changeCardsSize = () => {
	const gamePlace = document.getElementById('game-place');
	const cardsElements = document.querySelectorAll('.card__img');
	for (const cardElement of cardsElements) {
		if (difficultyLevel.value === '1') {
			gamePlace.style.width = '800px';
			cardElement.style.width = '150px';
		} else {
			cardElement.style.width = '150px';
		}
	}
};

export const hidingCards = () => {
	renderCardsBack(preparationForGame());
	const gamePlace = document.getElementById('game-place');
	const cardsElements = document.querySelectorAll('.card__wrapper');
	for (const cardElement of cardsElements) {
		if (difficultyLevel.value === '1') {
			gamePlace.style.width = '800px';
			cardElement.style.width = '150px';
			cardElement.style.height = '210px';
		} else {
			cardElement.style.width = '150px';
			cardElement.style.height = '210px';
		}
	}
};

export const showingCard = () => {
	const cards = document.querySelectorAll('.card');
	for (const card of cards) {
		card.addEventListener('click', () => {
			console.log(card.dataset.src);
			console.log(card);
			card.innerHTML = `
				<div class="card__front-side">
					<img class="card__img" src="${card.dataset.src}" alt="" style="width:150px; height: 210px" />
				</div>`;
		});
	}
};
