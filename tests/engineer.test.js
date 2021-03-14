const Engineer = require("../library/engineer");


test("Can set github account via constructor", () =>{
    const github = 'githubuser';
    const githubObj = new Engineer('wylie', 1, 'w@gmail.com', github);
    expect(githubObj.github).toBe(github);
}) 

// name method

test("Can get role via getRole()", () =>{
    const testValue = 'Engineer';
    const testObj = new Engineer('pete',1, 'test@gmail.com');
    expect(testObj.getRole()).toBe(testValue);
})

test("Can get github user via getGithub()", () =>{
    const testValue = 'engineer';
    const testObj = new Engineer('pete',1, 'test@gmail.com', testValue);
    expect(testObj.getGithub()).toBe(testValue);
})

// run it by going to terminal 
// npm run test