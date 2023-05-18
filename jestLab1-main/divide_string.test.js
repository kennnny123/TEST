const some = require('./divide_string');

afterEach(() => {
  jest.restoreAllMocks();
});

test('test callbacks', () => {
  expect(some.someAction("hallo niece and nephew", some.divide)).toEqual([ 'hallo', 'niece', 'and', 'nephew' ]);
});
test('test failed callbacks', () => {
  expect(some.someAction("hallo niece and nephew", some.divide)).not.toEqual([ 'nah', 'niece', 'and', 'nephew' ]);
});


test('checking types', () => {
const spy = jest.spyOn(some, 'someAction');
    let a = some.someAction("hallo niece and nephew", some.divide);
  expect(spy).toHaveBeenCalledWith("hallo niece and nephew", some.divide);
});
