describe('String operations', ()=> {
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
}
);
describe('array operations', ()=> {
    const arr = require('./array_utils');
let values;
  beforeAll(() => {
   values = [[1,2,3,4,5], [5,-8, 3,2,-4,1], [-5,8, -3, -2, 4, -1]]
  });


test('Expected result: 15', ()=>{
    expect(arr.ar(values[0])).toBe(15);
});

test('Expected result: [1, 2, 3, 5]', ()=>{
    expect(arr.s(values[1])).toStrictEqual([ 1, 2, 3, 5 ]);
});

test('Expected result: [ -5, -3, -2, -1 ]', ()=>{
    expect(arr.sn(values[2])).toStrictEqual([ -5, -3, -2, -1 ]);
});
}
);
