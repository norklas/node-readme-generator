// Packages for application
const fs = require("fs");
const inquirer = require("inquirer");

// Questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) => {
        return nameInput
          ? true
          : console.log("Please enter your GitHub username.");
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (emailInput) => {
        return emailInput
          ? true
          : console.log("Please enter your email address.");
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      validate: (titleInput) => {
        return titleInput
          ? true
          : console.log("Please enter a title for your project.");
      },
    },
    {
      type: "input",
      name: "repoURL",
      message: "Please enter a GitHub URL for your project:",
      validate: (repoInput) => {
        return repoInput
          ? true
          : console.log("Please enter a GitHub URL for your project!");
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description for your project:",
      validate: (descriptionInput) => {
        return descriptionInput
          ? true
          : console.log("Please enter a description for your project!");
      },
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like your project to have?",
      choices: [
        "Apache",
        "BSD 2-clause",
        "BSD 3-clause",
        "BSD 3-clause Clear",
        "Creative Commons",
        "GPL",
        "GPLv2",
        "GPLv3",
        "ISC",
        "MIT",
      ],
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
      validate: (installInput) => {
        return installInput
          ? true
          : console.log("Please enter steps for installation!");
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this application?",
      validate: (usageInput) => {
        return usageInput
          ? true
          : console.log("Please enter a usage description!");
      },
    },
    {
      type: "input",
      name: "contributing",
      message: "What needs to be known about contributing to your project?",
      validate: (contributionInput) => {
        return contributionInput
          ? true
          : console.log(
              "Please enter any contribution details for your project!"
            );
      },
    },
    {
      type: "input",
      name: "test",
      message: "Do you have any test instructions for your project?",
      validate: (testInput) => {
        return testInput
          ? true
          : console.log("Please enter any test details for your project!");
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
