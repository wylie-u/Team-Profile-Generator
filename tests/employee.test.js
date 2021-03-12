const Employee = require("../assets/library/employee");

test("Can create name", () =>{
    const name = "Wylie";
    const nameObj = new Employee(name);
    expect(nameObj.name).toBe(name);
}) 