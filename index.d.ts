declare module "*.jpg";
declare module "*.jpeg";

type Card = {
	suit: string;
	value: string;
	srcBack: string;
	srcFront: string;
	id: number;
}

type DifficultyLevel = {
	value?: string;
}

type GeneratedCards = {
	body?: any;
}

type GameStatus = {
	value?: string;
}
