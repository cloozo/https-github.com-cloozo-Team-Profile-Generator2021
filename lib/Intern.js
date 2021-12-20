const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, intSchool) {
    super(name, id, email);
    this.role = "Intern";
    this.intSchool = intSchool;
  }
  getRole() {
    return this.role;
  }

  getSchool() {
    return this.intSchool;
  }
  getHtml() {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
  }
}
module.exports = Intern;
