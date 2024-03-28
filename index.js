"use strict";

const inquirer = require("inquirer");
const favoriteLanguage = require("./questions/favoriteLanguage");
const preferredFramework = require("./questions/preferredFramework");
inquirer.prompt([favoriteLanguage]).then((answers) => {
  console.log("User's favorite language is:", answers.favoriteLanguage);
});

inquirer.prompt([preferredFramework]).then((answers) => {
  console.log("user's preferred framework is:", answers.preferredFramework);
});

console.log("Thank you for your input and summarizing your preference.");
