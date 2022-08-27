// requires the employee class and constructor 
const Employee = require("./Employee");

// the engineer class extends from the employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calls for the employee constructor 
        super (name, id, email);
        this.github = github; 
    }

    // gets the github username and returns it here
    getGithub () {
        return this.github;
    }

     // this will overwrite the role from employee to engineer
    getRole () {
        return "Engineer";
    }
}

// exports this data
module.exports = Engineer; 