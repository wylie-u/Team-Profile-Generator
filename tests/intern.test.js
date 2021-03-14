const Intern = require("../library/intern");


test("Can set school via constructor()", () =>{
  const testValue = "CU";
  const schoolObj = new Intern("kyle", 1, "test@test.com", testValue);
  expect(schoolObj.school).toBe(testValue);
})


test("Can get school via getSchool()", () =>{
    const testValue = 'harvard';
    const testObj = new Intern('pete',1, 'test@test.com', testValue);
    expect(testObj.getSchool()).toBe(testValue);
})

test("Can get role via getRole()", () =>{
    const testValue = 'Intern';
    const testObj = new Intern('pete',1, 'test@gmail.com');
    expect(testObj.getRole()).toBe(testValue);
})

// run it by going to terminal 
// npm run test