// requires the manager constructor 
const Manager = require('../lib/Manager');

// creates the manager object  
test('should create a manager object', () => {
    const manager = new Manager('Shauna', 44, 'slachelier@gmail.com.com', 6);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// uses getRole() to make sure the employee has the manager role
test('should get the role of employee', () => {
    const manager = new Manager('Shauna', 44, 'slachelier@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 