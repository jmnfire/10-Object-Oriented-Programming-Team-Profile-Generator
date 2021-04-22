const Manager = require("../lib/Manager");
test('Can you set the manager via constructor', () => {
    const officeNumber = 'school'
    const e = new Manager('jovan', 1, 'jmnfire@gmail.com', officeNumber)
    expect(e.officeNumber).toBe(officeNumber);
});
test('getRole() returns Manager', () => {
    const testRole = 'Manager'
    const e = new Manager('jovan', 1, 'jmnfire@mail.com', 'Manager')
    expect(e.getRole()).toBe(testRole)
});
test('Get the school name()', () => {
    const officeNumberName = 'officerNumber'
    const e = new Manager('jovan', 1, 'jmnfire@gmail.com', officeNumberName)
    expect(e.getOfficeNumber()).toBe(officeNumberName)
});