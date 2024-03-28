"use strict";

const preferredFramwork = {
  type: "list",
  name: "preferredFramework",
  message: "Which framework do you prefer?",
  choices: ["Django", "Flask", "Svelte", "Next.js"],
};
module.exports = preferredFramwork;
console.log(preferredFramwork);