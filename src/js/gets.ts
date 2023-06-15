export const getdifficultyLevel = () => {
	return `
	<form class="choose-difficulty">
		<div class="choose-difficulty__title">Выбери сложность</div>
		<div class="choose-difficulty__difficulty-row">
			<label>
				<input class="choose-difficulty__real-radio" value="1" name="level" type="radio">
				<span class="choose-difficulty__custom-radio">1</span>
			</label>
			<label>
				<input class="choose-difficulty__real-radio" value="2" name="level" type="radio">
				<span class="choose-difficulty__custom-radio">2</span>
			</label>
			<label>
				<input class="choose-difficulty__real-radio" value="3" name="level" type="radio">
				<span class="choose-difficulty__custom-radio">3</span>
			</label>
		</div>
		<div class="choose-difficulty__start-button">Старт</div>
	</form>`;
};

export const getPlayMenu = () => {
	return `
	<div class="game__menu menu">
		<div class="menu__timer">
			<div class="menu__timer-words">
				<span>min</span>
				<span>sec</span>
			</div>
			<div class="menu__timer-numbers">00.00</div>
		</div>
		<div class="menu__button">Начать заново</div>
	</div>`;
};

export const getPlayPlace = () => {
	return `
	<div class="game">
		${getPlayMenu()}
		<div class="game__game-place" id="game-place"></div>
	</div>`;
};

export const getCardsBack = (card: Card) => {
	return `
	<div class="card" data-index='${card.id}' data-src='${card.srcFront}'>
		<div class="card__wrapper">
			<div class="card__back-side">
				<img class="card__img" src="${card.srcBack}" alt="back side card" />
			</div>
		</div>
	</div>`;
};

export const getCardsFront = (card: Card) => {
	return `
	<div class="card">
			<div class="card__front-side">
				<img class="card__img" src="${card.srcFront}" alt="${card.value} of ${card.suit}" />
			</div>
	</div>`;
};

export const getWinMenu = () => {
	return `
	<div class="endwrapper">
		<div class="finalmenu">
			<div class="finalmenu__image">
				<img src="./img/finalMenu/win.png" alt="You win" />
			</div>
			<h3 class="finalmenu__title" id="game-status">Вы выиграли!</h3>
			<div class="finalmenu__subtitle">Затраченное время:</div>
			<div class="menu__timer-numbers finalmenu__timer-numbers" id='timer'>00.00</div>
			<div class="menu__button finalmenu__button">Играть снова</div>
		</div>
	</div>`
}

export const getLossMenu = () => {
	return `
	<div class="endwrapper">
		<div class="finalmenu">
			<div class="finalmenu__image">
				<img src="./img/finalMenu/loss.png" alt="You loss" />
			</div>
			<h3 class="finalmenu__title" id="game-status">Вы проиграли!</h3>
			<div class="finalmenu__subtitle">Затраченное время:</div>
			<div class="menu__timer-numbers finalmenu__timer-numbers" id='timer'>00.00</div>
			<div class="menu__button finalmenu__button">Играть снова</div>
		</div>
	</div>`
}