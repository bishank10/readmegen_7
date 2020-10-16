// array of questions for user
var inquirer = require("inquirer");
var fs = require("fs");

const questions = 
inquirer.prompt([
  {
    type: "input",
    message: "What is your name?", 
    name: "name"
  },
  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "languages",
    choices: ["Klingon", "English", "Whatever Brendon Speaks"]
  },
  {
    type: "list",
    message: "What is your preferred method of communciation?",
    name: "method", 
    choices: ["Email", "Phone", "Social Media"]
  }
]).then(function(response){
  var textForFile = "Name: " + response.name + "\n";
  textForFile = textForFile + "Languages: " + response.languages + "\n";
  textForFile = textForFile + "Preferred method: " + response.method
  fs.writeFile("userinfo.txt", textForFile, function(err){
    if(err){
      return console.log(err);
    }
    console.log("File written.");
  })
});



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
