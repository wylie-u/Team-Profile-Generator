const generateTeam = allMembers => {


         const generateManager = manager => {

            return `
            <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-header">
                              <h2 class="card-title">${manager.getName()}</h2>
                              <h4 class="card-text">${manager.getRole()}</h4>
                            </div>
                            <ul class="list-group">
                              <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                              <li class="list-group-item">${manager.getOfficeNumber()}</li>
                            </ul>
                            </div>
                          </div>
                          </div>
                          `
                          ;

        }

        const generateEngineer = engineer => {

            return `
            <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-header">
                              <h2 class="card-title">${engineer.getName()}</h2>
                              <h4 class="card-text">${engineer.getRole()}</h4>
                            </div>
                            <ul class="list-group">
                              <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                              <li class="list-group-item">${engineer.getGithub()}</li>
                            </ul>
                            </div>
                          </div>
                          </div>
                          `
                          ;


        }

        const generateIntern = intern => {

            return `
            <div class="col-md-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-header">
                              <h2 class="card-title">${intern.getName()}</h2>
                              <h4 class="card-text">${intern.getRole()}</h4>
                            </div>
                            <ul class="list-group">
                              <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                              <li class="list-group-item">${intern.getSchool()}</li>
                            </ul>
                            </div>
                          </div>
                          </div>
                          `
                          ;
        };
        const htmlArray = [];

        htmlArray.push(allMembers.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));


        htmlArray.push(allMembers
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => generateEngineer(engineer)));

        htmlArray.push(allMembers
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => generateIntern(intern)))

        return htmlArray.join("");

        
    };  



    module.exports = allMembers => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                  <h1>My Team</h1>
              </div>
        <div class="team-container">
            <div class="row team">
        ${generateTeam(allMembers)}
        </div>
        </div>
        </body>
        </html>
        `
        };