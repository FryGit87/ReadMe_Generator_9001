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
  licenseColour,
  githubUser,
  githubRepo,
  email,
}) => `
   ![license badge](https://img.shields.io/static/v1?label=license&message=${license}&color=${licenseColour})\n
---
# ${projectName}\n
 
## Description

  ${description}\n
---
## Table of Contents

[Installation](https://github.com/${githubUser}/${githubRepo}#installation)

[Usage](https://github.com/${githubUser}/${githubRepo}#usage)

[Contributing](https://github.com/${githubUser}/${githubRepo}#contributors)

[Tests](https://github.com/${githubUser}/${githubRepo}#tests)

[License](https://github.com/${githubUser}/${githubRepo}#license)

[Questions](https://github.com/${githubUser}/${githubRepo}#questions)


---
## Installation
To install follow the following instructions:\n
${installation}\n
---
## Usage

${usage}\n
---
## Contributors
The following users contributed to this project:\n
${contributors}\n
---
## Tests

${tests}\n
---
## License
This project is covered under the ${license} license.\n
To read more about it, [click here](https://choosealicense.com/licenses/${license}).

---
## Questions
For any questions regarding the project, contact can be made through the following links.\n
Github: [${githubUser}](https://github.com/${githubUser})\n
Email: [Email Me](${email})

`;
//   ![Project Logo](/images/${logo}.png)
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
    message: "Add the names of any known contributors to the project.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Is there any tests available for the application and how would a user run a test?",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license used...",
    choices: ["gpl-3.0", "mit", "apache-2.0"],
  },
  {
    type: "list",
    name: "licenseColour",
    message: "What colour do you want the license badge to be?",
    choices: ["Red", "Green", "Blue"],
  },
  {
    type: "input",
    name: "githubUser",
    message: "Enter your GitHub username.",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Must enter a Username");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "githubRepo",
    message: "Enter your GitHub repository name.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email.",
  },
  // {
  //   type: "input",
  //   name: "logo",
  //   message: "Name of an image to represnt the project (.png)",
  // },
];

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

//
