const Employee = require("../lib/Employee");
test('create an employee instance', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
});
test('Can set name via constructor', () => {
    const name = "Jovan" 
    const e = new Employee(name)
    expect(e.name).toBe(name)
});
test('Can set id via constructor', () => {
    const id = 100;
    const e = new Employee("jovan", id)
    expect(e.id).toBe(id)
});
test('Can set email via constructor', () => {
    const email = "jovan@gmail.com";
    const e = new Employee("jovan", 1, email)
    expect(e.email).toBe(email)
});
test('Can we get name via getName()', () => {
    const testName = "Emily";
    const e = new Employee(testName)
    expect(e.getName()).toBe(testName)
});
test('Can we get ID via getID()', () => {
    const testID = 100;
    const e = new Employee('Jovan', testID)
    expect(e.getID()).toBe(testID)
});
test('Can we get Email via getEmail()', () => {
    const testEmail = 'jmnfire@email.com'
    const e = new Employee('jovan', 1, testEmail)
    expect(e.getEmail()).toBe(testEmail)
});
test('Can we get Role via getRole()', () => {
    const testRole = 'Employee'
    const e = new Employee('jovan', 1, 'jmnfire@gmail.com',)
    expect(e.getRole()).toBe(testRole)
});