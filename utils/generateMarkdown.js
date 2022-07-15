// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, license, github, email } = data;

  // markdown
  const markdown = 
  `<h1 align='center'>${title}</h1>
<!-- badges will go here -->

## Description
${description}

## Table of Contents
[Installation](##Installation) ${ data.confirmUsage ? `
[Usage](##Usage)` : '' }
[License](##License) ${ data.confirmContributing ? `
[Contributing](##Contributing)` : '' } ${ data.testing ? `
[Tests](##Tests)` : '' }
[Questions](##Questions)

## Installation
\`${installation}\`

${ data.confirmUsage ? `## Usage
${data.usage}` : '' }

## License
${license} ${ data.confirmContributing ? `

## Contributing
${data.contributing}` : '' } ${ data.confirmTesting ? `

## Tests` : '' }

## Questions
Feel free to reach out with any questions, comments, or concerns!
[${github}](https://github.com/${github})
<${email}>
`;

  return markdown;
}

module.exports = generateMarkdown;