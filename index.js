const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const team = [];
const formHtml = require('./src/html-create')


//Function to start the team gen app
function startGenerator() {
    //Function to input manager info
    function inputManager() {
        console.log("Welcome to the Team Profile Generator, please respond to the following prompts to generate your team!")
      console.log("First, input your team manager's information:");
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?",
          },
          {
            type: 'input',
            name: 'managerId',
            message: "What is the your manager's ID?",
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: "What is the your manager's email?",
          },
          {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your team manager's office number?",
          },
        ])
        .then((answers) => {
          const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
          );
          team.push(manager);
          chooseTeamMember();
        });
    }
  
    //Function to choose to add either engineer, intern, or finish creating
    function chooseTeamMember() {
        console.log("Please choose another team member to add, or finish adding members.")
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'chooseTeam',
            message: 'Which of the following would you like to add to your team next?',
            choices: [
              'Engineer',
              'Intern',
              "I am finished building my team!",
            ],
          },
        ])
        .then((choice) => {
          switch (choice.chooseTeam) {
            case 'Engineer':
              createEng();
              break;
            case 'Intern':
              createInt();
              break;
            default:
              createTeam();
          }
        });
    }
  
    //Function to create an Engineer if chosen
    function createEng() {
        console.log("Fill out this engineer's information below:")
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: "What is this engineer's name?",
          },
          {
            type: 'input',
            name: 'engineerId',
            message: "What is this engineer's ID?",
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is this engineer's email?",
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: "What is this engineer's GitHub username?",
          },
        ])
        .then((answers) => {
          const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
          );
          team.push(engineer);
          chooseTeamMember();
        });
    }
  
    //Function to create an Intern if chosen
    function createInt() {
        console.log("Fill out this intern's information below:")
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'internName',
            message: "What is this intern's name?",
          },
          {
            type: 'input',
            name: 'internId',
            message: "What is this intern's ID?",
          },
          {
            type: 'input',
            name: 'internEmail',
            message: "What is this intern's email?",
          },
          {
            type: 'input',
            name: 'internSchool',
            message: "What school is this intern currently attending / did they previously attend?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
          );
          team.push(intern);
          chooseTeamMember();
        });
    }
  
    //Function to create the Team with the src in HTML with created employees
    function createTeam() {
        console.log("Success!! Building team!")
      fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'), 'index.html'), formHtml(team), 'utf-8');
    }
  
    inputManager();
  }
  
startGenerator();