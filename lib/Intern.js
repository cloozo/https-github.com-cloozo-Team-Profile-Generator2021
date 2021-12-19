const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, intSchool) {
    super(name, id, email);
    this.role = "Intern";
    this.intSchool = intSchool;
  }
  getRole() {
    return "intern";
  }

  getSchool() {
    return this.intSchool;
  }
  getHtml() {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${intern.getSchool()}" target="_blank" rel="noopener noreferrer">${intern.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;

  }
}
module.exports = Intern;
