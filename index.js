const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./library/employee");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const Intern = require("./library/intern");

const teamGenerator = require("./team");


const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "fullteam.html");

// array will hold all responses
let team = [];



//Inquirer prompt for manager: name, employee ID, email address, and office number

const managerFile = () =>
// works when there is a console log
  inquirer
    .prompt([
      // manager name
      {
        message: "What is your team manager's name?",
        name: "name",
      },
      {
        // email address
        message: "What is your team manager's email address?",
        name: "email",
      },
      {
        // office number

        type: "number",
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      // data represents values that are passed in
        const id = 1;
        const manager = new Manager(data.name, id, data.email, data.officeNumber);
        team.push(manager);
        addMember();
      

    
    });

// 1. prompt for manager's data
// then(
//1a. create manager object from Manager class with the data just entered: const manager = new Manager (the data based on the class properties);

const addMember = () =>
  inquirer
    .prompt([
      // manager name
      {
        type: "list",
        message: "Would you like to add another team member",
        name: "teamMember",
        choices: [
          "Engineer",
          new inquirer.Separator(),
          "Intern",
          new inquirer.Separator(),
          "All Done",
        ],
      },
    ])
    .then((data) => {
      switch (data.teamMember) {
        case "Engineer":
          engineerFile();
          break;
        case "Intern":
          internFile();
          break;
        case "All Done":
          createTeam();
          break;
      }
    });

const engineerFile = () =>
  inquirer
    .prompt([
      // manager name
      {
        message: "What is your engineer's name?",
        name: "name",
      },
      {
        // email address
        message: "What is your engineer's email address?",
        name: "email",
      },
      {
        // github

        message: "What is your github username",
        name: "github",
      },
    ])

    .then((data) => {
      let id = team.length + 1;
      const engineer = new Engineer(data.name, id, data.email, data.github);
      team.push(engineer);
      addMember();
      
      
    });

const internFile = () =>
  inquirer
    .prompt([
      {
        // name
        message: "What is the name of your intern",
        name: "name",
      },
      {
        // email address
        message: "What is your intern's email address?",
        name: "email",

      },
      {
        // school name

        message: "Where does your intern go to school",
        name: "school",
      },
    ])
    .then((data) => {
      let id = team.length + 1;
      const intern = new Intern(data.name, id, data.email, data.school);
      team.push(intern);
      addMember();
      

      
    });
    
  
  function createTeam() {
    // Direct which folder to go to when creating a new one
    fs.writeFile(outputPath, teamGenerator(team), function (err) {
        if (err) throw err;
        console.log('team.html has been generated :)');
    });
}
  






managerFile ();

