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
}

export const getPlayPlace = () => {
	return `
	<div class="game">
		${getPlayMenu()}
		<div class="game__game-place" id="game-place"></div>
	</div>`;
};

export const getCardsBack = (card) => {
	return `
	<div class="card">
		<div class="card__wrapper">
			<div class="card__back-side">
				<img src="${card.src}" alt="back side card" />
			</div>
		</div>
	</div>`
}

export const getCardsFront = (card) => {
	return `
	<div class="card">
			<div class="card__front-side">
				<img src="${card.src}" alt="${card.value} of ${card.suit}" />
			</div>
	</div>`
}