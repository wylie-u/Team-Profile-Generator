// requiring employee file
const Employee = require("./employee")
// using employee file 
class Engineer extends Employee {

    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer
   
