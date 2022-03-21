// Generate markdown with data provided
function generateMarkdown(data) {
  return `
  # [${data.title}](${data.repoURL})

  ${
    data.license === "Apache"
      ? "![Badge](https://img.shields.io/badge/license-Apache%202.0-blue)"
      : data.license === "BSD 2-clause"
      ? "![Badge](https://img.shields.io/badge/license-BSD%202--clause-blue)"
      : data.license === "BSD 3-clause"
      ? "![Badge](https://img.shields.io/badge/license-BSD%203--clause-blue)"
      : data.license === "BSD 3-clause Clear"
      ? "![Badge](https://img.shields.io/badge/license-BSD%203--clause%20Clear-blue)"
      : data.license === "Creative Commons"
      ? "![Badge](https://img.shields.io/badge/license-Creative%20Commons-blue)"
      : data.license === "GPL"
      ? "![Badge](https://img.shields.io/badge/license-GPL-blue)"
      : data.license === "GPLv2"
      ? "![Badge](https://img.shields.io/badge/license-GPLv2-blue)"
      : data.license === "GPLv3"
      ? "![Badge](https://img.shields.io/badge/license-GPLv3-blue)"
      : data.license === "ISC"
      ? "![Badge](https://img.shields.io/badge/license-ISC-blue)"
      : data.license === "MIT"
      ? "![Badge](https://img.shields.io/badge/license-MIT-blue)"
      : data.license === "None"
      ? ""
      : false
  }

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under ${
    data.license === "Apache"
      ? "**Apache 2.0**"
      : data.license === "BSD 2-clause"
      ? "**BSD 2-clause Simplified license**"
      : data.license === "BSD 3-clause"
      ? "**BSD 3-clause Revised license**"
      : data.license === "BSD 3-clause Clear"
      ? "**BSD 3-clause Clear license**"
      : data.license === "Creative Commons"
      ? "**Creative Commons license family**"
      : data.license === "GPL"
      ? "**GNU General Public License**"
      : data.license === "GPLv2"
      ? "**GNU General Public License v2.0**"
      : data.license === "GPLv3"
      ? "**GNU General Public License v3.0**"
      : data.license === "ISC"
      ? "**Internet Systems Consortium**"
      : data.license === "MIT"
      ? "**Massachusetts Institute of Technology license**"
      : data.license === "None"
      ? "**no license**"
      : false
  }

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about this project, please [email](mailto:${
    data.email
  }) me. You can view more projects at [GitHub](https://www.github.com/${
    data.github
  })!
`;
}

module.exports = generateMarkdown;
