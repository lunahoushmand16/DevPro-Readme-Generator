// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Logs success or error messages.
    fs.writeFile(fileName, data, (err) => {
        err ? console.log('❌ Error writing file:', err) : console.log('✅ README.md generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompts the user for project details using inquirer
    inquirer.prompt(questions).then((answers) => {
        // Generates markdown content using generateMarkdown.js
        const markdownContent = generateMarkdown(answers);
        // Writes README.md using fs.writeFile()
        writeToFile('Generat-README.md', markdownContent);
    })
}

// Function call to initialize app
init();
