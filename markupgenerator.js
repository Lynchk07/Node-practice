// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  switch (new renderLicenseBadge.value){
          case "MIT License":
          console.log("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
          break;
          case "Apache license":
          console.log("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)")
          break;
          case "GNU license":
          console.log("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)")
          break;

  }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# Liscense ${license}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${title} # Table of Contents ${toc}
  # Description \n
  ${description}
  # Installation \n
  ${installation}
  # Usage \n
  ${usage}
  # Collaborators \n
  ${credits}
  #License \n
  ${license}
  #GitHub \n
  ${git}
  #email \n
  ${email}`

;
}

module.exports = generateMarkdown;
