import { choosedCards, difficultyLevel, generatedCards } from '../index.js';
import { cards } from './cardsData.js';
import { shuffle, cardDoubling, cardsСomparison } from './helpers.js';
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
	generatedCards.body = cardsForGame;
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
	renderCardsBack(generatedCards.body);
	console.log(generatedCards.body);
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

export const showingAndCompareCards = () => {
	const cards = document.querySelectorAll('.card');
	for (const card of cards) {
		card.addEventListener('click', () => {
			card.innerHTML = `
				<div class="card__front-side">
					<img class="card__img" src="${card.dataset.src}" alt="" style="width:150px; height: 210px" />
				</div>`;
			choosedCards.push(card.dataset.src);
			switch (choosedCards.length) {
				case 2:
					cardsСomparison(choosedCards, 0, 1);
					break;
				case 4:
					cardsСomparison(choosedCards, 2, 3);
					break;
				case 6:
					cardsСomparison(choosedCards, 4, 5);
					break;
				case 8:
					if (
						generatedCards.body.length === 8 &&
						choosedCards[6] === choosedCards[7]
					) {
						setTimeout(() => {
							alert('You are the winner!!!');
						}, 400);
					} else {
						cardsСomparison(choosedCards, 6, 7);
					}
					break;
				case 10:
					cardsСomparison(choosedCards, 8, 9);
					break;
				case 12:
					if (
						generatedCards.body.length === 12 &&
						choosedCards[10] === choosedCards[11]
					) {
						setTimeout(() => {
							alert('You are the winner!!!');
						}, 400);
					} else {
						cardsСomparison(choosedCards, 10, 11);
					}
					break;
				case 14:
					cardsСomparison(choosedCards, 12, 13);
					break;
				case 16:
					cardsСomparison(choosedCards, 14, 15);
					break;
				case 18:
					if (
						choosedCards.length === 18 &&
						choosedCards[16] === choosedCards[17]
					) {
						setTimeout(() => {
							alert('You are the winner!!!');
						}, 400);
					}
					break;
			}
		});
	}
};
