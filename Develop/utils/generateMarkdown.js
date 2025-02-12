// This file takes user input from index.js and formats it into a structured README.md file.
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None')  {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license.replace(/\s/g, "%20")}-blue.svg)`; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None')  {
    return '';
  } else {
    return `## License\n\nThis project is licensed under the ${license} License.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Adds the title of the project
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, contact me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

export default generateMarkdown;
