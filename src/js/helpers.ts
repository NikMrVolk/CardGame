export const shuffle = (arr: Array<object>) => {
	return arr
		.map((i) => [Math.random(), i])
		.sort()
		.map((i) => i[1]);
};

export const cardDoubling = (arr: Array<object>) => {
	return arr.map((el) => [el].concat([el])).flat();
};

export const cardsComparison = (
	choosedCards: string[],
	firstElement: number,
	secondElement: number
) => {
	choosedCards[firstElement] === choosedCards[secondElement]
		? setTimeout(() => {
				alert('Good');
		  }, 300)
		: setTimeout(() => {
				alert('you lose');
		  }, 300);
};
