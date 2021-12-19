const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, mgrOfficeNumber) {
    super(name, id, email);
    // this.role = "Manager";
    this.mgrOfficeNumber = mgrOfficeNumber;
  }

  getRole() {
    return "Manager";
  }

  getMgrOfficeNumber() {
    return this.mgrOfficeNumber;
  }
  getHtml() {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>mgrOfficeNumber
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${manager.getMgrOfficeNumber()}" target="_blank" rel="noopener noreferrer">${manager.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
  }
}
module.exports = Manager;
