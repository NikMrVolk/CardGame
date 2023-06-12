import {
	choosedCards,
	difficultyLevel,
	generatedCards,
	gameTime,
	gameStatus,
} from '../index';
import { cards } from './cardsData';
import { getPlayPlace, getWinMenu, getdifficultyLevel } from './gets';
import { shuffle, cardDoubling, cardsComparison } from './helpers';
import { renderApp, renderCardsBack, renderCardsFront } from './render';

export const preparationForGame = () => {
	const shuffledСards: any = shuffle(cards);
	let cardsForGame: any;

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
	const gamePlace: any = document.getElementById('game-place');
	const cardsElements: any = document.querySelectorAll('.card__img');
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
	const gamePlace: any = document.getElementById('game-place');
	const cardsElements: any = document.querySelectorAll('.card__wrapper');
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

export const timer = () => {
	const myTimer: any = document.querySelector('.menu__timer-numbers');
	let min = 0;
	let sec = 0;
	myTimer.innerHTML = `0${min}.0${sec}`;
		setInterval(() => {
			if (sec !== 59) {
				sec++;
				gameTime.seconds = sec;
				gameTime.minutes = min;
				if (sec < 10) {
					myTimer.innerHTML = `0${min}.0${sec}`;
				} else {
					myTimer.innerHTML = `0${min}.${sec}`;
				}
			} else {
				sec = 0;
				min++;
				gameTime.minutes = min;
				myTimer.innerHTML = `0${min}.0${sec}`;
			}
		}, 1000);
};

export const showingAndCompareCards = () => {
	const cards: any = document.querySelectorAll('.card');
	for (const card of cards) {
		card.addEventListener('click', () => {
			card.innerHTML = `
				<div class="card__front-side">
					<img class="card__img" src="${card.dataset.src}" alt="" style="width:150px; height: 210px" />
				</div>`;
			choosedCards.push(card.dataset.src);
			const index = choosedCards.length - 1;
			if (
				index % 2 !== 0 &&
				choosedCards.length !== generatedCards.body.length
			) {
				cardsComparison(choosedCards, index - 1, index);
			}
			if (
				choosedCards.length === generatedCards.body.length &&
				choosedCards[index] === choosedCards[index - 1]
			) {
				gameStatus.status = 'Вы выиграли!'
				endGame(getWinMenu)
			}
		});
	}
};

export const endGame = (getMenu: Function) => {
	clearInterval(5);
	const endResult: any = document.querySelector('.content');
	setTimeout(() => {
		endResult.innerHTML += getWinMenu();
		const endGameStatus: any = document.getElementById('game-status');
		endGameStatus.innerHTML = gameStatus.status;
		const endGameTime: any = document.getElementById('timer');
		if (gameTime.seconds < 10) {
			endGameTime.innerHTML = `0${gameTime.minutes}.0${gameTime.seconds}`;
		} else {
			endGameTime.innerHTML = `0${gameTime.minutes}.${gameTime.seconds}`;
		}
		const button: any = document.querySelector('.finalmenu__button');
		button.addEventListener('click', () => {
			renderApp(getdifficultyLevel);
		});
	}, 300);
}

export const game = () => {
	renderApp(getPlayPlace);
	renderCardsFront(preparationForGame());
	changeCardsSize();

	setTimeout(() => {
		hidingCards();
		timer();
		showingAndCompareCards();
	}, 5000);
};
