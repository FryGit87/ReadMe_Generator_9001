// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const createReadMe = ({
  projectName,
  description,
  installation,
  usage,
  contributors,
  tests,
  license,
}) =>
  `**${projectName}\n
  ![license badge](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)\n
${description}\n
${installation}\n
${contributors}\n
${tests}\n
${license}\n
`;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your Project Name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of the project...",
  },
  {
    type: "input",
    name: "installation",
    message: "Does application require a specific installation process?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Is the application currently in use or have examples of how to use?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Is it possible for others to contribute, if yes, how so?",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there any tests available for the application?",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license used...",
    choices: ["GNU_GPLv3", "MIT_License", "Apache_v2"],
  },
];
// inquirer.prompt(questions).then((data) => {}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeInfo = createReadMe(data);
  fs.writeFile(fileName, readMeInfo, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([...questions]).then((answers) => {
    writeToFile("./readme-factory/README.md", answers);
  });
}

// Function call to initialize app
init();

// TOO TIRED FOR MORE
// working prototype
//add more homework criteria
//try not to break
//badges from shield.io for license apache v2 gnu v3 MIT
//
