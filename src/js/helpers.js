export const shuffle = (arr) => {
	return arr
		.map((i) => [Math.random(), i])
		.sort()
		.map((i) => i[1]);
};

export const cardDoubling = (arr) => {
	return arr.map((el) => [el].concat([el])).flat();
};

export const cardsСomparison = (choosedCards, firstElement, secondElement) => {
	choosedCards[firstElement] === choosedCards[secondElement]
		? setTimeout(() => {
				alert('Good');
		  }, 300)
		: setTimeout(() => {
				alert('you lose');
		  }, 300);
};
