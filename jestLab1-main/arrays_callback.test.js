const some = require('./arrays_callback');

afterEach(() => {
  jest.restoreAllMocks();
});

test('test callbacks', () => {
  expect(some.someAction([5,2,4,7], some.calc)).toEqual([ 2, 4, 5, 7 ]);
});
test('test failed callbacks', () => {
  expect(some.someAction([5,2,4,7], some.calc)).not.toEqual([ 3, 4, 5, 7 ]);
});
test('checking how many times called', () => {
const spy = jest.spyOn(some, 'calc');
    let a = some.someAction([5,2,4,7], some.calc);
    a = some.someAction([5,2,4,7], some.calc);
  expect(spy).toHaveBeenCalledTimes(2);
});
