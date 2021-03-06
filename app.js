const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Prompt = require("inquirer/lib/prompts/base");

const getEmployeeType = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the employee's name?",
        name: 'employeeName',
      },
      {
        type: 'input',
        message: 'What is their id number?',
        name: 'idNumber',

      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',

      },
      {
        type: 'list',
        message: 'What kind of employee are they?',
        name: 'employeeType',
        choices: ["Manager", "Intern", "Engineer"],
      },
      
     
    ])
    .then(geese => {
      console.log("I am " + geese.employeeType)
      if (geese.employeeType === "Manager") {

        inquirer
          .prompt([
            {
              type: 'input',
              message: 'What is their office number',
              name: 'ManagerNumber',
            }
          ])

      }
      else if (geese.employeeType === "Intern") {
        inquirer
          .prompt([
            {
              type: 'input',
              message: 'What school are they from?',
              name: 'schoolType',
            }
          ])
      }

      else if (geese.employeeType === "Engineer") {
        inquirer
          .prompt([
            {
              type: 'input',
              message: 'What is their gitHub user name?',
              name: 'gitHubUserName',
            }
          ])


      }
    })
    .then(inquirer
      .prompt(addNewMember?))
    .catch (error => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else when wrong
  }
});
}

getEmployeeType()







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
