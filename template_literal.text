const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "mgrName",
      message: "What is the team Manager's Name",
    },
    {
      type: "input",
      name: "mgrID",
      message: "What is the team manager's ID",
    },
    {
      type: "input",
      name: "mgrEmail",
      message: "What is the team manager's Email",
    },
    {
      type: "input",
      name: " mgrOfficeNumber",
      message: "What is the team manager's Office Number",
    },

    {
      type: "list",
      name: "EmployeeType",
      message: "Which Type of Team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add1"],
    },
    // add engineer
    {
      type: "input",
      name: "engName",
      message: "What is the team Engineer's Name",
    },
    {
      type: "input",
      name: "engID",
      message: "What is the team Engineer's ID",
    },
    {
      type: "input",
      name: "engEmail",
      message: "What is the team Enginer's Email",
    },
    {
      type: "input",
      name: "engGitHub",
      message: "What is the Engineer's Github",
    },

    {
      type: "list",
      name: "addEmpl2",
      message: "Which Type of Team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add2"],
    },

    // Intern
    {
      type: "input",
      name: "intName",
      message: "What is the team Intern's Name",
    },
    {
      type: "input",
      name: "intID",
      message: "What is the team Intern's ID",
    },
    {
      type: "input",
      name: "intEmail",
      message: "What is the Intern's Email",
    },
    {
      type: "input",
      name: "intSchool",
      message: "What is the Intern's school",
    },
    {
      type: "list",
      name: "addEmpl2",
      message: "Which Type of Team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add3"],
    },
    //
  ])
  .then((answers) => {
    const {
      mgrName,
      mgrID,
      mgrEmail,
      mgrOfficeNumber,
      EmployeeType,
      engName,
      engID,
      engEmail,
      engGitHub,
      addEmpl1,
      intName,
      intID,
      intEmail,
      intSchool,
      addEmpl2,
    } = answers;

    const template = `
    Hello, ${mgrName}.
    Your manager ID is:  ${mgrID}.
    Your email address is: ${mgrEmail};
    with office number ${mgrOfficeNumber};
    Your employee TYpe is:  ${EmployeeType};

    Hello, ${engName}.
    Your manager ID is:  ${engID};
    Your email address is: $engEmail} with office number ${engEmail};
    Your offices is: $engEmail} with office number ${engGitHub};
    Finally, wee all know that you are a ${addEmpl1};

    Hello, ${intName}.
    Your manager ID is:  ${intID};
    Your school ${intEmail}.
    From Schoo ${intSchool};
    Finally, wee all know that you are a ${addEmpl2};
    `;
    fs.writeFileSync("./output/index.html", template);
    console.log("File written successfully!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
