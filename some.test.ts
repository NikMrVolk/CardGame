/**
 * @jest-environment jsdom
 */

const { it, expect, describe } = require('@jest/globals');
import { cardDoubling } from './src/js/helpers';
import { cards } from './src/js/cardsData';

describe('helpers()', () => {
	it('should return array of 6 cards', () => {
		const cardsForTest = cards.slice(0, 3);
		const expected = 6;

		const doubledCards = cardDoubling(cardsForTest).length;

		expect(expected).toBe(doubledCards);
	});

	it('should return array of 12 cards', () => {
		const cardsForTest = cards.slice(0, 6);
		const expected = 12;

		const doubledCards = cardDoubling(cardsForTest).length;

		expect(expected).toBe(doubledCards);
	});

	it('should return array of 18 cards', () => {
		const cardsForTest = cards.slice(0, 9);
		const expected = 18;

		const doubledCards = cardDoubling(cardsForTest).length;

		expect(expected).toBe(doubledCards);
	});

	it('should return empty array', () => {
		const cardsForTest = cards.slice(0, 0);
		const expected = 0;

		const doubledCards = cardDoubling(cardsForTest).length;

		expect(expected).toBe(doubledCards);
	});
});
