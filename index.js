const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./library/employee");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const Intern = require("./library/intern");

// this will be for length of array
let teamNumber = [];

//Inquirer prompt for manager: name, employee ID, email address, and office number

const managerFile = () =>
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
    .then((answers) => {
      const name = answers.name;
      const id = 1;
      const email = answers.email;
      const officeNumber = answers.officeNumber;
      // calling manager class
      const teamMember = new Manager(name, id, email, officeNumber);
      addMember();
    });

// 1. prompt for manager's data
// then(
//1a. create manager object from Manager class with the data just entered: const manager = new Manager (the data based on the class properties);

//1b. call the function which prompt for 3 choices: engineer, intern or done)

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
    .then((answers) => {
      switch (answers.teamMember) {
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

    .then((answers) => {
      const name = answers.name;
      const id = teamNumber.length + 1;
      const email = answers.email;
      const github = answers.github;
      // calling engineer class
      const teamMember = new Engineer(name, id, email, github);
      addMember();
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
    .then((answers) => {
      const name = answers.name;
      const id = teamNumber.length + 1;
      const email = answers.email;
      const school = answers.school;
      // calling intern class
      const teamMember = new Intern(name, id, email, school);
      addMember();
    });

//Choice is Engineer:
//call the engineer prompts by calling the function for engineer (structure is similar to how we created the manager's function: prompts, then create object from engineer class, then call the function which prompt for 3 choices: engineer, intern or done)

//Same for Intern

//Done: call html function, values will go into cards

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
