import calculateCashback from '../data';

test.each([
  [1000000, 50000],
  [100001, 5001],
])('calculateCashback %i', (amount, cashbash) => {
  expect(calculateCashback(amount)).toBe(cashbash);
});

test('calculateCashback 100000', () => {
  expect(calculateCashback(100000)).toBe(5000);
});

test('calculateCashback 99999', () => {
  expect(calculateCashback(99999)).toBe(2000);
});

test('calculateCashback 50000', () => {
  expect(calculateCashback(50000)).toBe(1000);
});

test('calculateCashback 10001', () => {
  expect(calculateCashback(10001)).toBe(201);
});

test('calculateCashback 10000', () => {
  expect(calculateCashback(10000)).toBe(200);
});

test('calculateCashback 9999', () => {
  expect(calculateCashback(9999)).toBe(100);
});

test('calculateCashback 5000', () => {
  expect(calculateCashback(5000)).toBe(50);
});

test('calculateCashback 1001', () => {
  expect(calculateCashback(1001)).toBe(11);
});

test('calculateCashback 1000', () => {
  expect(calculateCashback(1000)).toBe(10);
});

test('calculateCashback 999', () => {
  expect(calculateCashback(999)).toBe(0);
});
