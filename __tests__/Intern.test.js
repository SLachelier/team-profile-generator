// requires the intern constructor 
const Intern = require('../lib/Intern');

// creates the intern object  
test('should create the intern object', () => {
    const intern = new Intern('Shauna', 44, 'slachelier@gmail.com', 'UT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// uses getSchool() to get the school of the intern
test('should get the employees school', () => {
    const intern = new Intern('Shauna', 44, 'slachelier@gmail.com', 'UT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// uses getRole() to obtain/verify the role of the intern
test('should get the role of the employee', () => {
    const intern = new Intern('Shauna', 44, 'slachelier@gmail.com', 'UT');

    expect(intern.getRole()).toEqual("Intern");
}); 