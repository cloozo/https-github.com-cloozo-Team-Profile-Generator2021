const Intern = require("../lib/Intern");

test("school via constructor", () => {
  const sampleTest = "FSU";
  const empl = new Intern("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.school).toBe(sampleTest);
});

test('return "Intern"', () => {
  const sampleTest = "Intern";
  const empl = new Intern("Marc", 1, "mail@mail.com", "FSU");
  expect(empl.getRole()).toBe(sampleTest);
});

test("via getSchool()", () => {
  const sampleTest = "FSU";
  const empl = new Intern("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.getSchool()).toBe(sampleTest);
});
