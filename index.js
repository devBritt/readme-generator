// packages
const { writeFile } = require("fs/promises");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// mock data
const mockAnswers = {
    title: 'Readme Generator',
    description: 'A CLI application that can be useed to generate a professional and informative README for open source projects.',
    installation: 'npm i readme-generator',
    confirmUsage: true,
    usage: 'Use guidelines',
    confirmContributing: true,
    contributing: 'Pick an issue and assign it to yourself. Create a pull request when complete.',
    confirmTesting: false,
    license: 'MIT license',
    github: 'devBritt',
    email: 'brittanyrc95@gmail.com'
};

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must provide a title for your project!');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for the project:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must provide a description!');
            };
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can a user install the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Installation instructions must be provided!');
            };
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include guidelines for using the application?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any guidelines for using the application?',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            };
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to include guidelines for contributing to the project?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing to this project?',
        when: ({ confirmContributing }) => {
            if (confirmContributing) {
                return true;
            } else {
                return false;
            };
        }
    },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to include testing instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can contributors perform testing?',
        when: ({ confirmTesting }) => {
            if (confirmTesting) {
                return true;
            } else {
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'Apache License 2.0', 'BSD 3-Clause license', 'BSD 2-Clause license', 'GNU GPL', 'GNU LPGL', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License 2.0'
        ],
        default: 5
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address for users/developers to send questions:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            };
        }
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    // prompt user for info
    // const answers = await prompt(questions);
    // generate markdown
    console.log(generateMarkdown(mockAnswers));
    // write file
}

// Function call to initialize app
init();
