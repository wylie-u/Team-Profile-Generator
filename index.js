const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./library/employee");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");
const Intern = require("./library/intern");

// const style = require("./dist/style.css");

// this will be for length of array
let teamNumber = [];


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
    .then((answers) => {
      const name = answers.name;
      const id = 1;
      const email = answers.email;
      const officeNumber = answers.officeNumber;
      // calling manager class
      const manager = new Manager(name, id, email, officeNumber);
      teamNumber.push(manager)
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
      const engineer = new Engineer(name, id, email, github);
      teamNumber.push(engineer)
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
      const intern = new Intern(name, id, email, school);
      teamNumber.push(intern)
      addMember();
    });

    //html 

    const generateHTML = (answers) =>

    
`<body>
<div class="jumbotron jumbotron-fluid">
      <h1>My Team</h1>
  </div>
  <div class="team-container">
    <div class="row team">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
      </div>
      
          
          
      
</body>
</html>`

    // write file

managerFile ();