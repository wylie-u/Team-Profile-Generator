const Employee = require("../library/employee");

test("Can create name", () =>{
    const name = "Bob";
    const nameObj = new Employee(name);
    expect(nameObj.name).toBe(name);
}) 

test("Can create id", () =>{
    const id = 12;
    const idObj = new Employee('foo', id);
    expect(idObj.id).toBe(id);
}) 

test("Can create email", () =>{
    const email = 'w@gmail.com';
    const emailObj = new Employee('wylie', 1, 'w@gmail.com');
    expect(emailObj.email).toBe(email);
}) 

// name method
test("Can get name via getName()", () =>{
    const testValue = 'wylie';
    const testObj = new Employee(testValue);
    expect(testObj.getName()).toBe(testValue);
})

test("Can get id via getID()", () =>{
    const testValue = 1;
    const testObj = new Employee('pete', testValue);
    expect(testObj.getId()).toBe(testValue);
})

test("Can get email via getEmail()", () =>{
    const testValue = 'wyl@gmail.com';
    const testObj = new Employee('pete',1, testValue);
    expect(testObj.getEmail()).toBe(testValue);
})

test("Can get role via getRole()", () =>{
    const testValue = 'Employee';
    const testObj = new Employee('pete',1, 'test@gmail.com');
    expect(testObj.getRole()).toBe(testValue);
})

// run it by going to terminal 
// npm run test