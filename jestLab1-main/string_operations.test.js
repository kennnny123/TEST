const op = require('./string_operations');

test('maamaam is palindrome', () => {
  expect(op.palindrome("maamaam")).toBe(true);
});
test('maamam is not palindrome', () => {
  expect(op.palindrome("maamam")).toBe(false);
});

test('aaddc, dadac, ddcaa is anagrams', () => {
  expect(op.checkAnagram(["aaddc", "dadac", "ddcaa"])).toBe(true);
});
test('aaddc, dadac, ddca is not anagrams', () => {
  expect(op.checkAnagram(["aaddc", "dadac", "ddca"])).toBe(false);
});
