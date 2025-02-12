# Dev-README-Generator

## Description

Dev-README-Generator is a command-line application that helps developers quickly create a professional README file for their projects.

- **Motivation:** Developers often spend time manually formatting README files, which can be automated.
- **Purpose:** This tool streamlines README creation, allowing developers to focus on coding and their projects.
- **Problem Solved:** Automates the process of generating a high-quality README with essential sections.
- **What I Learned:** Working with Node.js, handling user input using Inquirer, and dynamically generating Markdown content. and learn about concept of the profassional Readme file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Video](#video)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Dev-README-Generator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Dev-README-Generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   node index.js
   ```

## Usage

- The application prompts the user for details about their project, such as title, description, installation steps, usage, contributors, license, and more.
- After completing the prompts, it generates a professional `README.md` file.

### Example:

```
? What is your project title? My Awesome Project
? Provide a short description: This is an automated README generator.
? What are the installation steps? npm install, node index.js
...
```

### Sample Output:

```md
# My Awesome Project
## Description
This is an automated README generator.
...
```

### Screenshots:

![Readme File Preview](./Images%20&%20video%20copy%202/Readme%20Pre.png)
![Node JS Scripts in Terminal](./Images%20&%20video%20copy%202/node%20Scripts.png)

## Credits

- Created by **[Luna Houshmans](https://github.com/lunahoushmand16)**
- Built with [Node.js](https://nodejs.org/) and [Inquirer](https://www.npmjs.com/package/inquirer)
- Link for info [GitHub Doc](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- Info about how to choose your license [Licenses](https://choosealicense.com/licenses/)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Badges

![GitHub repo size](https://img.shields.io/github/repo-size/lunahoushmand16/DevPro-Readme-Generator)
![GitHub contributors](https://img.shields.io/github/contributors/lunahoushmand16/DevPro-Readme-Generator)
![GitHub stars](https://img.shields.io/github/stars/lunahoushmand16/DevPro-Readme-Generator?style=social)

## Features

- Generates a structured README file automatically
- Supports different licenses
- Includes a table of contents for easy navigation
- Saves time for developers

## How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Added new feature'`
4. Push changes: `git push origin feature-name`
5. Open a pull request

## Tests

Run the application with node index.js and verify the generated `README.md` file.

## Video

[Watch the demo](./Images%20&%20video%20copy%202/Demo%20of%20Project%20copy.mp4)
