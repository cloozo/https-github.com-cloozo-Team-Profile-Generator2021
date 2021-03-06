const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Trying to get an instance Of Employee", () => {
    const empl = new Employee();
    expect(typeof empl).toBe("object");
  });

  describe("getName", () => {
    it("Trying to get name via", () => {
      const sampleTest = "Marc";
      const empl = new Employee(sampleTest);
      expect(empl.getName()).toBe(sampleTest);
    });
  });

  describe("getId", () => {
    it("Trying to get id via getId()", () => {
      const sampleTest = 100;
      const empl = new Employee("Jeff", sampleTest);
      expect(empl.getId()).toBe(sampleTest);
    });
  });

  describe("getEmail", () => {
    it("THis shoudl getemail via getEmail()", () => {
      const sampleTest = "mail@mail.com";
      const empl = new Employee("Jeff", 1, sampleTest);
      expect(empl.getEmail()).toBe(sampleTest);
    });
  });

  describe("getRole", () => {
    it('This should return "Employee"', () => {
      const sampleTest = "Employee";
      const empl = new Employee("Marc", 1, "mail@mail.com");
      expect(empl.getRole()).toBe(sampleTest);
    });
  });
});
