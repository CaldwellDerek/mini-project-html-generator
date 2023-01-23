const fs = require('fs');
const inq = require('inquirer');

function htmlCode(name, location, bio, linkedin, github) {
    const code = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Test Portfolio Site</title>
        <link href="./index.css" rel="stylesheet">
    </head>
    <body>
        <main>
            <h1>${name}</h1>
            <h3>${location}</h3>
            <p>${bio}</p>
            <a href="${linkedin}">LinkedIn Profile</a>
            <a href="${github}">GitHub Profile</a>
        </main>
        <script src="./index.js"></script>
    </body>
    </html>
    `
    return code;
}

const cssCode = `
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-weight: bold;
        font-size: 32px;
    }

    p {
        font-size: 20px;
    }

    a {
        color: green;
    }
`



function init() {
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
        fs.writeFile("index.html", htmlCode(answers.Name, answers.location, answers.bio, answers.linkedin, answers.github), error => {if (error) console.log(error);});
        fs.writeFile("index.css", cssCode, error => {console.log(error);});
        });
}

init();