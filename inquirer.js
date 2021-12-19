const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your name now?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is your last name?",
    },
    {
      type: "input",
      name: "emai",
      message: "what are your favorite languages?",
      choices: ["HTML", "CSS", "JAVASCRIPT"],
    },
  ])
  .then((answers) => {
    console.log("here are the answers ", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
