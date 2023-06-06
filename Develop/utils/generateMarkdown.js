// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = `https://img.shields.io/badge/license-${license}-blue`;
    return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![License: ${license}](${renderLicenseBadge(license)}.svg)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'None';
  } else {
    return `${renderLicenseLink(license)}`
  }
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.username}/${data.title} \r
  ${renderLicenseSection(data.license)}
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${renderLicenseSection(data.license)}
  # Contributing
  ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
  If you have any questions about the app, please contact by github: ${data.username} or Email: ${data.email}. 
`;
}

module.exports = generateMarkdown;
