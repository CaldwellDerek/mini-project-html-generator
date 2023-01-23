/*
# Module 09 Mini-Project: Portfolio Generator

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Make sure to add some CSS styling to the document.

* You’ll need the following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` version 8.2.4 for collecting user input

  * String template literals for generating a string version of the HTML document before it is written to the file system

## 💡 Hints

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## 🏆 Bonus

* Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?

*/

const fs = require('fs');
const inq = require('inquirer');

inq.prompt([
    {
        type: "input",
        name: "Name",
        message: "Enter your name:"
    },
    {
        type: "input",
        name: "location",
        message: "Where are you located?"
    },
    {
        type: "input",
        name: "bio",
        message: "Write some information about yourself:"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn url:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub url:"
    }
]).then(answers => {
        console.log(answers)
        fs.writeFile("index.html", data, (error)=> {if (error) console.log(error);})
    });

