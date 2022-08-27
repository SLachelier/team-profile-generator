// requires the generated HTML data
const generateHTML = require('./src/generateHTML');

// requires the team constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// requires file system and inquirer
//allows the use of text input and pathing in the file system
const fs = require('fs'); 
const inquirer = require('inquirer');

// creates an empty team array
const teamArr = []; 

// =====================
//   MANAGER SECTION
// =====================

const addManager = () => {
    console.log(`
    =======================
            MANAGER 
    =======================
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the team's manager?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "what is the Manager's ID number?",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter Manager's ID number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's e-mail address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ("please enter the manager's e-mail address.")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumber => {
                if  (isNaN(officeNumber)) {
                    console.log ("Please enter the manager's office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => { //creates a new manager object with the input data
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager); //pushes that object into the team array
    })
};

// =====================
//   EMPLOYEE SECTION
// =====================

const addEmployee = () => {
    if(role.input === "Engineer") {
        console.log(`
        =========================
                ENGINEER 
        =========================
        `);
    } else if(input.role === "Intern") {
        console.log(`
        =======================
                INTERN 
        =======================
        `);
    }
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the mployee's ID number?",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter the employee's ID number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the employee's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // places the corresponding data depending on the employee's role

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArr.push(employee); //pushes the employee data into the employee array

        if (confirmAddEmployee) {
            return addEmployee(teamArr); 
        } else {
            return teamArr; //returns all of the team array data
        }
    })

};


// writes the generated HTML file to the dist folder
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there's an error, log the error and return
        if (err) {
            console.log(err);
            return;
        // otherwise, display success message
        } else {
            console.log("Your team profile has been generated! Please check your generated index.html.")
        }
    })
}; 

addManager() //returns the generated manager data from within the team array along with catching any errors
    .then(addEmployee)
    .then(teamArr => {
    return generateHTML(teamArr);
    })
    .then(pageHTML => {
    return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });