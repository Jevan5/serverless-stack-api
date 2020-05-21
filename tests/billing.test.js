import { calculateCost } from '../libs/billing-lib';
import { TestScheduler } from 'jest';

test('Lowest tier', () => {
    const storage = 10;

    const expectedCost = 4000;
    const cost = calculateCost(storage);

    expect(expectedCost).toEqual(cost);
});

test('Middle tier', () => {
    const storage = 100;

    const expectedCost = 20000;
    const cost = calculateCost(storage);

    expect(expectedCost).toEqual(cost);
});

test('Highest tier', () => {
    const storage = 101;

    const expectedCost = 10100;
    const cost = calculateCost(storage);

    expect(expectedCost).toEqual(cost);
});