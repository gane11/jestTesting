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

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
}); 

//toBeFlasy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
}); 

//toEqual - for objects and array
test('User should be Brad Trabersy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});


//less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 670;
    expect(load1 + load2).toBeLessThan(1600);
})


//regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

//arrays 
test('Admin should be in usernames', () => {
    userNames = ['alex' ,'karen', 'admin'];
    expect(userNames).toContain('admin');
})


//working with async data

//async
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});

//promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// })