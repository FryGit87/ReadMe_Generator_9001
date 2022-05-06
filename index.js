// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const createReadMe = ({
  projectName,
  description,
  installation,
  usage,
  license,
}) =>
  `**${projectName}
3
${description}
1
${installation}
2
${usage}
${license}
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
    message: "?",
  },
  {
    type: "input",
    name: "usage",
    message: "?",
  },
  //   },
  //   {
  //     type: "input",
  //     name: "contributors",
  //     message: "?",
  //   },
  //   {
  //     type: "input",
  //     name: "tests",
  //     message: "?",
  {
    type: "list",
    name: "license",
    message: "Select the license used...",
    choices: ["GNU GPLv3", "MIT License", "Apache v2.0"],
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
