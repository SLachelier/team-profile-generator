// requires the employee constructor
const Employee = require('../lib/Employee');

// creates the employee object 
test('should create the employee object', () => {
    const employee = new Employee('Shauna', 44, 'slachelier@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// uses getName() to get the name of the employee
test('should get the employees name', () => {
    const employee = new Employee('Shauna', 44, 'slachelier@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// uses getId() to get the employees ID number
test('should get the employees ID number', () => {
    const employee = new Employee('Shauna', 44, 'slachelier@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// uses getEmail() to get the email of the employee
test('should get the employees email', () => {
    const employee = new Employee('Shauna', 44, 'slachelier@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// uses getRole() to get the role of the employee
test('should get role of employee', () => {
    const employee = new Employee('Shauna', 44, 'slachelier@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 