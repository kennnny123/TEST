const obj = require('./objects');

afterEach(() => {
    jest.restoreAllMocks();
});
test('Greets', () => {
    const spy = jest.spyOn(obj, 'introduce');
    let introducing = obj.introduce();
    introducing = obj.introduce();
    introducing = obj.introduce();

    expect(spy).toHaveBeenCalledTimes(3);
    expect(introducing).toBe('Hello, Im Vladyslav Balan!');
});
