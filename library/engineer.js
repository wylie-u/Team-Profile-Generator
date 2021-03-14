// requiring employee file
const Employee = require("./employee")
// using employee file 
class Engineer extends Employee {

    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;
        
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer
   
