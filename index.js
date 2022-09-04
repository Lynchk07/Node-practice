// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is your project title?',
            name: 'title',
            
        },
        {
            type: 'input',
            message: 'what is your project description?',
            name: 'description',
            
        },
        {
            type: 'input',
            message: 'Table of contents(optional)',
            name: 'toc',
            
        },
        {
            type: 'input',
            message: 'What steps required for install?',
            name: 'installation',
            
        },
        {
            type: 'input',
            message: 'Provide instructions and examples?',
            name: 'usage',
            
        },
        {
            type: 'input',
            message: 'List collaborators',
            name: 'credits',
            
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices:['MIT License','Apache License','GNU License']
            
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
            
        },

        {
            type: 'input',
            message: 'Github username?',
            name: 'git',
           
        },

    ])

    .then(( {
        title,
        description,
        toc,
        installation,
        usage,
        credits,
        license,
        email,
        git,
    })=>{
        //template 
        const fileName = `# ${title}
        #Table of Contents \n
        ${toc}
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
        ${email}`;

    createFile(title.table);

    }
    );

// TODO: Create a function to write README file
function writeToFile(title,data) {


fs.writeFile("./output/test.md", "# Markdown \n" , `# ${title} # Table of Contents ${toc}
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
${email}`), 

(err) => {
    if(err) console.error(err)
  
    console.log("success")
  }
}



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
