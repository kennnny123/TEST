const sum = require('./index');
const cases1 = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

describe("'add' utility", () => {
  test.each(cases1)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = sum.sum(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
const cases2 = [[2, 2, 0], [-2, -2, 0], [2, -2, 4]];

describe("'add' utility", () => {
  test.each(cases2)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = sum.min(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
const cases3 = [[2, 2, 4], [-2, -2, 4], [2, -2, -4]];

describe("'add' utility", () => {
  test.each(cases3)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = sum.dup(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
const cases4 = [[2, 2, 1], [-2, -2, 1], [2, -2, -1]];

describe("'add' utility", () => {
  test.each(cases4)(
    "given %p and %p as arguments, returns %p",
    (firstArg, secondArg, expectedResult) => {
      const result = sum.div(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  );
});


