const app = document.querySelector('.content')

// let gameTime
let difficultyLevel
// let gameStatus
// let generatedCards
// let choosedCards

const startGame = () => {
	const buttonStartGame = document.querySelector(
		'.choose-difficulty__start-button'
	)
	buttonStartGame.addEventListener('click', () => {
		const inputsDifficultyLevel = document.querySelectorAll(
			'.choose-difficulty__real-radio'
		)
		for (const inputDifficultyLevel of inputsDifficultyLevel) {
			if (inputDifficultyLevel.checked) {
				difficultyLevel = inputDifficultyLevel.value
			}
		}
		if (difficultyLevel) {
			renderApp(getPlayPlace)
			setTimeout(
				() =>
					alert(
						`Вы перешли на поле для игры, выыбрав уровень сложности ${difficultyLevel}`
					),
				100
			)
		}
	})
}

const getdifficultyLevel = () => {
	return `<form class="choose-difficulty">
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
</form>`
}

const getPlayPlace = () => {
	return ``
}

const renderApp = (getElementHTML) => {
	app.innerHTML = getElementHTML()
	if (document.querySelector('.choose-difficulty__start-button')) {
		startGame()
	}
}

renderApp(getdifficultyLevel)
