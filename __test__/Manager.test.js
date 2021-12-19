const Manager = require("../lib/Manager");

test("via constructor argument", () => {
  const sampleTest = 100;
  const empl = new Manager("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.officeNumber).toBe(sampleTest);
});

test('should return "Manager"', () => {
  const sampleTest = "Manager";
  const empl = new Manager("Marc", 1, "mail@mail.com", 100);
  expect(empl.getRole()).toBe(sampleTest);
});

test("office number via getOffice()", () => {
  const sampleTest = 100;
  const empl = new Manager("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.getOfficeNumber()).toBe(sampleTest);
});
