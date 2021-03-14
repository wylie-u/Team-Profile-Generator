const Manager = require("../library/manager");



test("Can set officeNumber via constructor", () =>{
    const officeNumber = 1;
    const officeNumberObj = new Manager('pete', 1, 'testValue', 1);
    expect(officeNumberObj.officeNumber).toBe(officeNumber);
})

test("Can get office number via getOfficeNumber()", () =>{
    const testValue = 5404;
    const testObj = new Manager('pete',1, 'trial', testValue);
    expect(testObj.getOfficeNumber()).toBe(testValue);
})

test("Can get role via getRole()", () =>{
    const testValue = 'Manager';
    const testObj = new Manager('pete',1, 'test@gmail.com');
    expect(testObj.getRole()).toBe(testValue);
})

// run it by going to terminal 
// npm run test