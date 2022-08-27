// =====================================
//  this generates the html for the user
// =====================================

// generates the manager template
const generateManager = function (manager) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">
                    next_week</i>
                </div>x
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    `;
};

// generates the engineer template
const generateEngineer = function (engineer) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">
                    terminal</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
        `
};

// generates the intern template
const generateIntern = function (intern) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">
                    perm_contact_calendar</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    `
};

// Pushes the array's data to the HTML
generateHTML = (data) => {

    // creates an array for the amount of cards that will be populated
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // if the employee's role is manager, then generate the manager template
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // if the employee's role is engineer, then generate the engineer template
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // if the employee's role is intern, then generate the intern template 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joins the strings 
    const employeeCards = pageArray.join('')

    // returns all of the generated employee cards to the team page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

};

// this generates the HTML of the team page
const generateTeamPage = function (employeeCards) {   
    return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <!--linked FontAwesome assets-->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <!--Bootstrap stylesheet and the material icons-->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

            <!--the local styleSheet-->
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!--employee cards get placed here-->
                        ${employeeCards}
                    </div>
                </div>
            </main>
            
        </body>
        <!-- Script links for jQuery and Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script> 
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </html>
        `;
};

// this exports the generated HTML to the index.js
module.exports = generateHTML; 