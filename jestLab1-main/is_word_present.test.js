const isPresent = require('./is_word_present');

test('sentence "hallo niece and nephew" contains word "and"', () => {
  expect(isPresent("hallo niece and nephew", "and")).toBeTruthy();
});
test('sentence "hallo niece and nephew" doesnt contains word "mine"', () => {
  expect(isPresent("hallo niece and nephew", "mine")).not.toBeTruthy();
});
