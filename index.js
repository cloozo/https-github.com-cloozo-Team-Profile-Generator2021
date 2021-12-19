const res = require("express/lib/response");
const fs = require("fs");
const inquirer = require("inquirer");
let Manager = require("./lib/Manager");
let Engineer = require("./lib/Engineer");
let Intern = require("./lib/Intern");
let path = require("path");
let DIST_DIR = path.resolve(__dirname, "dist");
let distPath = path.join(DIST_DIR, "index.html");
let render = require("./src/htmlTemplate.js");
let team = [];
function managerMenu() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameMgr",
        message: "What is the team Manager's Name",
      },
      {
        type: "input",
        name: "idMgr",
        message: "What is the team manager's ID",
      },
      {
        type: "input",
        name: "emailMgr",
        message: "What is the team manager's Email",
      },
      {
        type: "input",
        name: "mgrOfficeNumber",
        message: "What is the team manager's Office Number",
      },
    ])
    .then((managerAnswers) => {
      let manager = new Manager(
        managerAnswers.nameMgr,
        managerAnswers.idMgr,
        managerAnswers.emailMgr,
        managerAnswers.mgrOfficeNumber
      );
      team.push(manager);
      createTeam();
    });
}
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "What type of the team member you want to add",
        choices: ["Engineer", "Intern", "I don't want to add"],
      },
    ])
    .then((choice) => {
      switch (choice.teamMemberChoice) {
        case "Engineer":
          addEngineerToTeam();
          break;
        case "Intern":
          addInternToTeam();
          break;
        default:
          finalizeTeam();
      }
    });
}
function addEngineerToTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameEng",
        message: "What is the team Engineer's Name",
      },
      {
        type: "input",
        name: "idEng",
        message: "What is the team Engineer's ID",
      },
      {
        type: "input",
        name: "emailEng",
        message: "What is the team Enginer's Email",
      },
      {
        type: "input",
        name: "engGitHub",
        message: "What is the Engineer's Github",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.nameEng,
        response.idEng,
        response.emailEng,
        response.githubEng
      );
      team.push(engineer);
      createTeam();
    });
}
// Make new function for Intern similar to Engineer
function addInternToTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameInt",
        message: "What is the tean Intern's Name",
      },
      {
        type: "input",
        name: "idInt",
        message: "What is the team Intern's ID",
      },
      {
        type: "input",
        name: "emailInt",
        message: "What is the team Intern's Email",
      },
      {
        type: "input",
        name: "intSchool",
        message: "What is the Intern's school",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.nameInt,
        response.idInt,
        response.emailInt,
        response.schoolInt
      );
      team.push(intern);
      createTeam();
    });
}
function finalizeTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(team), "utf-8");
}
/* createManager(); */

managerMenu();
