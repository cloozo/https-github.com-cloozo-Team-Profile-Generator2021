const Engineer = require("../lib/Engineer");

test("github() account via constructor", () => {
  const sampleTest = "GitHubUser";
  const empl = new Engineer("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.github).toBe(sampleTest);
});

test("getRole() should return Engineer", () => {
  const sampleTest = "Engineer";
  const empl = new Engineer("Marc", 1, "mail@mail.com", "GitHubUser");
  expect(empl.getRole()).toBe(sampleTest);
});

test("Can get GitHub username via getGithub()", () => {
  const sampleTest = "GitHubUser";
  const empl = new Engineer("Marc", 1, "mail@mail.com", sampleTest);
  expect(empl.getGithub()).toBe(sampleTest);
});
