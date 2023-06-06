export const shuffle = (arr) => {
	return arr
		.map((i) => [Math.random(), i])
		.sort()
		.map((i) => i[1]);
};

export const cardDoubling = (arr) => {
	return arr.map((el) => [el].concat([el])).flat();
};

