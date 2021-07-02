const functions = require('./functions');

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNUll - matches only null
// tobeUndefined - matches only undefined
// toBeDefined is the opposite of toBeUndefined
//toBeTruthy - matches naything that if statement treats as true
// toBeFalsy -matches naything that if statement treats as false

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
}); 


test('Adds 2 + 2 to NOT EQUAL 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
}); 


test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
}); 

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
}); 