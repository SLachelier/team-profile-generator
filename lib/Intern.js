// requires the employee class and constructor
const Employee = require('./Employee');

// the intern class extends from the employee class
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calls for the employee constructor 
        super (name, id, email); 
        this.school = school; 
    }

    // gets the school name and returns it here
    getSchool () {
        return this.school;
    }

     // this will overwrite the role from employee to Intern
    getRole () {
        return "Intern";
    }
}

// exports this data 
module.exports = Intern; 