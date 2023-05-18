const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});
test('adds 1 + 2.5 to equal 3.5', () => {
  expect(sum.sum(1, 2.5)).toBe(3.5);
});
const min = require('./index');
test('minus 3 - 2 to equal 1', () => {
  expect(min.min(3, 2)).toBe(1);
});
test('minus 1 - 2 to equal -1', () => {
  expect(min.min(1, 2)).toBe(-1);
});
const dup = require('./index');
test('dups 1 * 2 to equal 2', () => {
  expect(dup.dup(1, 2)).toBe(2);
});
test('dups 2.5 * 2 to equal 5', () => {
  expect(dup.dup(2.5, 2)).toBe(5);
});
const div = require('./index');
test('divs 2 / 2 to equal 1', () => {
  expect(div.div(2, 2)).toBe(1);
});
test('divs 5 / 2 to equal 2.5', () => {
  expect(div.div(5, 2)).toBe(2.5);
});
