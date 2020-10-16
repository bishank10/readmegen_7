// array of questions for user
var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkdown = require("./utils/generateMarkdown")

const questions = [
  {
    type: "input",
    message: "what is your github user name?", 
    name: "username"
  },

  {
    type: "input",
    message: "what is your email address?",
    name: "email"
  },

  {
    type: "input",
    message: "what is your projects name?",
    name: "title"
  },
  
  {
    type: "input",
    message: "please write a short description of your project?",
    name: "description"
  },

  {
    type: "list",
    message: "what kind of license does your project have?",
    name: "license",
    choices : ["MIT","APACHE 2.0","GPL 3.0","BSD 3","NONE"]
  },
  
  {
    type: "input",
    message: "what command will run installation ",
    name: "installation",
    default : "npm i"
  },

  {
    type: "input",
    message: "what command will run test?",
    name: "test",
    default : "mpm test"
    
  },

  {
    type: "input",
    message: "what does the user need to know about using the repo? ",
    name: "usage"
  },

  {
    type: "input",
    message: "what does the user need to know about contributing to the repo? ",
    name: "contribute"
  },

  {
    type: "input",
    message: "give us a contact info for any question? ",
    name: "questioncontact"
  }
]





// function to write README file
function writeToFile(fileName, response) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), response)
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile("Readme.md", generateMarkdown(response));
        console.log("created");
    })
};

// function call to initialize program
init();
