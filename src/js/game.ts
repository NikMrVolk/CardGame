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
	const shuffledСards: Card[] = shuffle(cards);
	let cardsForGame: Card[];

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
	const gamePlace: HTMLElement | null = document.getElementById('game-place');
	const cardsElements: NodeListOf<HTMLElement> =
		document.querySelectorAll('.card__img');
	cardsElements.forEach((cardElement: HTMLElement) => {
		if (difficultyLevel.value === '1' && gamePlace) {
			gamePlace.style.width = '800px';
			cardElement.style.width = '150px';
		} else {
			cardElement.style.width = '150px';
		}
	});
};

export const hidingCards = () => {
	renderCardsBack(generatedCards.body);
	const gamePlace: HTMLElement | null = document.getElementById('game-place');
	const cardsElements: NodeListOf<HTMLElement> =
		document.querySelectorAll('.card__wrapper');
	cardsElements.forEach((cardElement: HTMLElement | null) => {
		if (difficultyLevel.value === '1' && gamePlace) {
			gamePlace.style.width = '800px';
		}
		if (cardElement) {
			cardElement.style.width = '150px';
			cardElement.style.height = '210px';
		}
	});
};

export const timer = () => {
	const myTimer: HTMLElement | null = document.querySelector(
		'.menu__timer-numbers'
	);
	if (myTimer) {
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
	}
};

export const showingAndCompareCards = () => {
	const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
	cards.forEach((card: HTMLElement) => {
		card.addEventListener('click', () => {
			card.innerHTML = `
				<div class="card__front-side">
					<img class="card__img" src="${card.dataset.src}" alt="" style="width:150px; height: 210px" />
				</div>`;
			const cardSRC: string | undefined = card.dataset.src;
			if (cardSRC) {
				choosedCards.push(cardSRC);
			}
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
				gameStatus.status = 'Вы выиграли!';
				endGame(getWinMenu);
			}
		});
	});
};

export const endGame = (getMenu: Function) => {
	clearInterval(5);
	const endResult: HTMLElement | null = document.querySelector('.content');
	if (endResult) {
		setTimeout(() => {
			endResult.innerHTML += getWinMenu();
			const endGameStatus: HTMLElement | null =
				document.getElementById('game-status');
			if (endGameStatus) {
				endGameStatus.innerHTML = gameStatus.status;
			}
			const endGameTime: HTMLElement | null = document.getElementById('timer');
			if (gameTime.seconds < 10 && endGameTime) {
				endGameTime.innerHTML = `0${gameTime.minutes}.0${gameTime.seconds}`;
			} else if (endGameTime) {
				endGameTime.innerHTML = `0${gameTime.minutes}.${gameTime.seconds}`;
			}
			const button: HTMLElement | null =
				document.querySelector('.finalmenu__button');
			button?.addEventListener('click', () => {
				renderApp(getdifficultyLevel);
			});
		}, 300);
	}
};

export const game = () => {
	renderApp(getPlayPlace);
	renderCardsFront(preparationForGame());
	changeCardsSize();
	document.querySelector('.menu__button')?.addEventListener('click', () => {
		console.log(1);
		renderApp(getdifficultyLevel);
	});
	setTimeout(() => {
		hidingCards();
		timer();
		showingAndCompareCards();
	}, 5000);
};
