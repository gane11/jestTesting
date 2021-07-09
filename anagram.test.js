const isAnagram = require('./anagram');

test('isAnagram function exists' ,() => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is anagram of "iceman"', () => {
    expect(isAnagram('cineam', 'iceman')).toBeTruthy();
});


test('"Dormitory" is anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});


test('"Hello" is not anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

test('hello', () => {
    expect()
})