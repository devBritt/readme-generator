// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `<p align="center"><img src="https://img.shields.io/badge/License-${license}-blue" alt="License badge." /></p>` : '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'BSD 2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'GNU GPL': 'https://opensource.org/licenses/gpl-license',
    'GNU LPGL 3.0': 'https://opensource.org/licenses/LGPL-3.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'Common Development and Distribution License': 'https://opensource.org/licenses/CDDL-1.0',
    'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0'
  };

  return license ? licenseLinks[license] : '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `## License
  The README Generator is covered under the ${license} license. You can find details about it at [opensource.org](${renderLicenseLink(license)})` : '';
}

function generateMarkdown(data) {
  const { title, description, installation, license, github, email } = data;

  // markdown
  const markdown = 
`<h1 align='center'>${title}</h1>
${renderLicenseBadge(license)}

<h2 align='center'>Description</h2>
<p align='center'>${description}</p>

<h2 align='center'>Table of Contents</h2>

<h3 align='center'>

*[Installation](##Installation)* | ${ data.confirmUsage ? `*[Usage](##Usage)* |` : '' } *[License](##License)* | ${ data.confirmContributing ? ` *[Contributing](##Contributing)* | ` : '' }${ data.testing ? `*[Tests](##Tests)* | ` : '' }*[Questions](##Questions)*

---

</h3>

## Installation
\`${installation}\`

${ data.confirmUsage ? `## Usage
${data.usage}` : '' }

${renderLicenseSection(data.license)} ${ data.confirmContributing ? `

## Contributing
${data.contributing}` : '' } ${ data.confirmTesting ? `

## Tests` : '' }

## Questions
Feel free to reach out with any questions, comments, or concerns!
[${github}](https://github.com/${github})
<${email}>`;

  return markdown;
}

module.exports = generateMarkdown;