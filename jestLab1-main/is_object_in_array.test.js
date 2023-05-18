const isPresent = require('./is_object_in_array');

test('array ["one","two","tree","go"]', () => {
  expect(isPresent(["one","two","tree","go"], "tree")).toBeTruthy();
});
test('array ["one","two","tree","go"]', () => {
  expect(isPresent(["one","two","tree","go"], "nah")).not.toBeTruthy();
});
