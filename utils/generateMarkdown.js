// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Github userName :
${response.username}

### Table of content :

#### description :
${response.description}

#### Contact :
 Fell free to reach out to me at this email here : ${response.email}.

##### required license for the project:
${response.license}
 
##### Required command to install the programme :
${response.installation}

##### Required command to test the programme :
${response.test}

##### Required command to install the programme :
${response.installation}

##### Info for users to contribute to this programme :
${response.installation}

#### if you have any questions about the programme fell free to reachout to me at : ${response.questioncontact}

`;

}

module.exports = generateMarkdown;
