// requires the engineer constructor 
const Engineer = require('../lib/Engineer');

// creates the engineer object  
test('should create the engineer object', () => {
    const engineer = new Engineer('Shauna', 44, 'slachelier@gmail.com', 'SLachelier');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// uses getGithub() to obtain the engineers github username
test('should obtain the engineers github username', () => {
    const engineer = new Engineer('Shauna', 44, 'slachelier@gmail.com', 'SLachelier');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// uses getRole() to obtain/verify the role of the employee
test('should get the role of employee', () => {
    const engineer = new Engineer('Shauna', 44, 'slachelier@gmail.com', 'SLachelier');

    expect(engineer.getRole()).toEqual("Engineer");
});