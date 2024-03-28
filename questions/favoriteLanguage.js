'use strict'; 
 
 
const favoriteLanguage = {
  type: "list",
  name: "favoriteLanguage",
  message: "Which is your favorite programming language?",
  choices: ["HTML", "JavaScript", "Css", "Python"],
};
module.exports = favoriteLanguage;
console.log(favoriteLanguage);