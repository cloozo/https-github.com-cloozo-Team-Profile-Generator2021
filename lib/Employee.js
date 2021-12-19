class Employee {
  constructor(name, id, email) {
    this.employeeName = name;
    this.employeeID = id;
    this.employeeEmail = email;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Employee;
