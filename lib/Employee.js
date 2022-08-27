// the employee class and constructor to hold and re-use the data
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returns the input name of the employee
    getName () {
        return this.name;
    }
    // returns the input id of the employee
    getId () {
        return this.id;
    }   
    // returns the input email of the employee
    getEmail () {
        return this.email;
    }
    // returns the employee
    getRole () {
        return 'Employee'; 
    }
};

// exports this data
module.exports = Employee; 