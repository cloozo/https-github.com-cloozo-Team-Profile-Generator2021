const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    // this.role = "Engineer";
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.gitHub;
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
            <li class="list-group-item">GitHub: <a href="https://github.com/${this.getGitHub()}" target="_blank" rel="noopener noreferrer">${this.getGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
  }
}
module.exports = Engineer;
