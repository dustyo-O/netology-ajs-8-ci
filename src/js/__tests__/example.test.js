function sum(a, b) {
  let result = 0;
  for (let i = 0; i < b; i += 1) {
    result += a;
  }

  return result;
}

test('b zero', () => {
  expect(sum(1, 0)).toBe(0);
});

test('b positive', () => {
  expect(sum(2, 3)).toBe(6);
});

test('b = 1', () => {
  expect(sum(3, 1)).toBe(3);
});
