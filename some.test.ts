/**
 * @jest-environment jsdom
 */

const { it, expect, describe } = require('@jest/globals');
import { cardDoubling } from './src/js/helpers';
import { cards } from './src/js/cardsData';

describe('helpers()', () => {
	it('should return array of doubling cards', () => {
		const cardsForTest = cards.slice(0, 3);
		const expected = 6;

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
