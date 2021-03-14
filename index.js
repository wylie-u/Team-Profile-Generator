const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./library/employee");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const Intern = require("./library/intern");

const teamGenerator = require("./template");


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
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addMember();


    //   const name = answers.name;
    //   const id = 1;
    //   const email = answers.email;
    //   const officeNumber = answers.officeNumber;
    //   // calling manager class
    //   const manager = new Manager(name, id, email, officeNumber);
    // //   pushing manager into empty array 
    //   teamNumber.push(manager)
    //   addMember();
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
        message: "What is your team manager's email address?",
        name: "email",
      },
      {
        // github

        message: "What is your github username",
        name: "github",
      },
    ])

    .then((data) => {

      const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        addMember();


    //   const name = answers.name;
    //   const id = team.length + 1;
    //   const email = answers.email;
    //   const github = answers.github;
    //   // calling engineer class
    //   const engineer = new Engineer(name, id, email, github);
    // //   pushing engineer into empty array 
    //   teamNumber.push(engineer)
      
    });

const internFile = () =>
  inquirer
    .prompt([
      {
        // name
        message: "What is the name of your intern",
        name: "intern",
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

      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      addMember();

      // const name = answers.name;
      // const id = team.length + 1;
      // const email = answers.email;
      // const school = answers.school;
      // // calling intern class
      // const intern = new Intern(name, id, email, school);
      // // pushing intern into empty array 
      // teamNumber.push(intern)
      // addMember();
    });
    
  
  function createTeam() {
    // Direct which folder to go to when creating a new one
    // const fileOut = path.resolve(__dirname, "dist");
    // const outPath = path.join(fileOut, 'team.html')
    fs.writeFile(outputPath, teamGenerator(team), function (err) {
        if (err) throw err;
        console.log('team.html has been generated :)');
    });
}
  






managerFile ();

