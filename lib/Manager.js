// requires the employee class and constructor
const Employee = require('./Employee');

// the manager class extends from the employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calls for the employee constructor 
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

     // this will overwrite the role from employee to manager
    getRole () {
        return "Manager";
    }
}

// exports this data
module.exports = Manager; 