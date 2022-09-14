const solution = require('./addTwoDigits.js');

test('test 1', () => {
    expect(solution(29)).toBe(11);
});

test('test 2', () => {
    expect(solution(48)).toBe(12);
});

test('test 3', () => {
    expect(solution(10)).toBe(1);
});

test('test 4', () => {
    expect(solution(25)).toBe(7);
});

test('test 5', () => {
    expect(solution(52)).toBe(7);
});

test('test 6', () => {
    expect(solution(99)).toBe(18);
});

test('test 7', () => {
    expect(solution(44)).toBe(8);
});

test('test 8', () => {
    expect(solution(50)).toBe(5);
});

test('test 9', () => {
    expect(solution(39)).toBe(12);
});

test('test 10', () => {
    expect(solution(26)).toBe(8);
});
