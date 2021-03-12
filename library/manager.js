const Employee = require("./employee")

class Manager extends Employee {

    constructor(name, id, email, officeNumber){

        super(name, id, email)
            this.officeNumber = officeNumber;
            this.role = "Manager";
        
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Manager;


//const one = new Manager("Wylie", 1, "wylie@gmail.com", 1234567);
//const two = new Manager("Trinh", 2, "trinh@gmail.com", 45678);

//one.getOfficeNumber();